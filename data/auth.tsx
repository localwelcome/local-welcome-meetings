import {
  AuthChangeEvent,
  Session,
  SupabaseRealtimePayload,
  User,
} from '@supabase/supabase-js'
import { debounce } from 'lodash'
import { useRouter } from 'next/dist/client/router'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { CookieSetOptions } from 'universal-cookie'
import AuthModal from '../components/AuthModal'
import { Profile, RoomPermission } from '../types/app'
import { NO_OP } from '../utils/utils'
import { supabase } from './supabase'

export interface IUserContext {
  user: User | null
  isLoggedIn: boolean
  session: Session | null
  profile: Profile | null
  signOut: (routing?: boolean) => void
  signIn: () => void
  permissions: RoomPermission[]
  canManageShifts: boolean
}

export const UserContext = createContext<IUserContext>({
  user: null,
  isLoggedIn: false,
  session: null,
  profile: null,
  signOut: NO_OP,
  signIn: NO_OP,
  permissions: [],
  canManageShifts: false,
})

export async function getUserProfile(userId: string): Promise<Profile | null> {
  const res = await supabase
    .from<Profile>('profile')
    .select('*')
    .eq('userId', userId)

  return res.data?.[0] || null
}

export async function getUserProfileForEmail(
  email: string,
): Promise<Profile | null> {
  const res = await supabase
    .from<Profile>('profile')
    .select('*')
    .eq('email', email)

  return res.data?.[0] || null
}

export function getAuthCookie(event: AuthChangeEvent, session: Session | null) {
  return fetch('/api/auth', {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify({ event, session }),
  }).then((res) => res.json())
}

export function subscribeToRoomPermissions(
  id: string,
  callback: (payload: SupabaseRealtimePayload<RoomPermission>) => void,
) {
  const subscription = supabase
    .from<RoomPermission>('roompermission')
    .on('*', callback)
    .subscribe()

  return () => supabase.removeSubscription(subscription)
}

export function getRoomPermissions(profileId: string) {
  return supabase
    .from<RoomPermission>('roompermission')
    .select('*')
    .eq('profileId', profileId)
}

export function UserContextProvider({ children, ...props }: any) {
  const [session, setSession] = useState<Session | null>(
    supabase.auth.session(),
  )
  const [cookies, setCookies, deleteCookies] = useCookies([
    'lwoProfile',
    'lwoPermissions',
  ])
  const [userProfile, setUserProfile] = useState<Profile | null>(
    session?.user ? cookies['lwoProfile'] : null,
  )
  const [user, setUser] = useState<User | null>(supabase.auth.user())
  const [permissions, setRoomPermissions] = useState<RoomPermission[]>(
    session?.user ? cookies['lwoPermissions'] : null,
  )
  const router = useRouter()

  useEffect(() => {
    const cookieOptions: CookieSetOptions = {
      path: '/',
      secure: true,
      sameSite: 'strict',
    }
    if (userProfile)
      setCookies('lwoProfile', JSON.stringify(userProfile), cookieOptions)
    else deleteCookies('lwoProfile', cookieOptions)
    if (permissions)
      setCookies('lwoPermissions', JSON.stringify(permissions), cookieOptions)
    else deleteCookies('lwoPermissions', cookieOptions)
  }, [setCookies, deleteCookies, userProfile, permissions])

  useEffect(
    function setupSubscriptions() {
      const profileSub = supabase
        .from(`profile:userId=eq.${user?.id}`)
        .on('*', (e) => void setUserProfile(e.new))
        .subscribe()

      const authSub = supabase.auth.onAuthStateChange((event, newSession) => {
        setUser(newSession?.user || null)
        setSession(newSession)
        // Send session to /api/auth route to set the auth cookie.
        // NOTE: this is only needed if you're doing SSR (getServerSideProps)!
        getAuthCookie(event, newSession)
      })

      return () => {
        supabase.removeSubscription(profileSub)
        try {
          // @ts-ignore
          supabase.removeSubscription(authSub)
        } catch (e) {
          console.error('Unsub from user', e)
        }
      }
    },
    [user?.id],
  )

  async function updateRoomPermissions(profileId: string) {
    const perms = await getRoomPermissions(profileId)
    setRoomPermissions(perms.data || [])
  }

  useEffect(() => {
    if (!userProfile?.id) {
      return NO_OP
    } else {
      const unsubPermissions = subscribeToRoomPermissions(
        userProfile.id,
        () => userProfile?.id && updateRoomPermissions(userProfile.id),
      )

      return () => unsubPermissions?.()
    }
  }, [userProfile?.id])

  const getUserSessionData = React.useCallback(async () => {
    const newSession = supabase.auth.session()
    setSession(newSession)

    const newUser = supabase.auth.user()
    setUser(newUser)

    if (newUser) {
      await getAuthCookie('SIGNED_IN', newSession)
      await updateUserPermissions()
      const profile = await getUserProfile(newUser.id)
      setUserProfile(profile)
      if (!profile) return
      updateRoomPermissions(profile.id)
    } else {
      await getAuthCookie('SIGNED_OUT', newSession)
    }
  }, [])

  useEffect(() => void getUserSessionData(), [getUserSessionData])

  useEffect(() => {
    if (user?.email) {
      window.posthog?.identify?.(user.id)
      window.posthog?.people?.set?.({
        supabase_user_id: user.id,
        email: user.email,
        $email: user.email,
        is_localwelcome_leader: !!userProfile?.canLeadSessions,
      })
    }
  }, [user, userProfile])

  function signOut(routing = true) {
    supabase.auth.signOut()
    setUser(null)
    setSession(null)
    setUserProfile(null)
    setRoomPermissions([])
    if (routing) router.push('/user')
  }

  const isLoggedIn = !!user && !!session
  const [isOpen, setIsOpen] = useState(false)
  const signIn = () => setIsOpen(true)
  useEffect(() => {
    setIsOpen(false)
  }, [isLoggedIn])

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        profile: userProfile,
        session,
        signOut,
        signIn,
        permissions,
      }}
      {...props}
    >
      {children}
      <AuthModal {...{ isOpen, setIsOpen }} />
    </UserContext.Provider>
  )
}

export function useUser(): IUserContext {
  return useContext(UserContext)
}

export async function login(
  email: string,
  password: string,
  redirectTo?: string,
) {
  return supabase.auth.signIn(
    { email, password },
    redirectTo ? { redirectTo } : undefined,
  )
}

export async function resetPassword(email: string, redirectTo?: string) {
  return supabase.auth.api.resetPasswordForEmail(
    email,
    redirectTo ? { redirectTo } : undefined,
  )
}

export async function updatePasswordOnSupabase(password: string) {
  return supabase.auth.update({ password })
}

async function _updateUserPermissions() {
  await fetch('/api/updateUserProfile', { method: 'POST' })
}

export const updateUserPermissions = debounce(_updateUserPermissions, 10000, {
  leading: true,
})
