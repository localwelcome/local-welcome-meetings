import { LockClosedIcon } from '@heroicons/react/solid'
import { sendMagicLink, updateUserPermissions, useUser, signOut } from '../data/auth';
import { useState } from 'react';
import { ShowFor } from './Elements';

export default function Auth() {
  const [hasSent, setHasSent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-ignore
    if (!event.target.email) return
    // @ts-ignore
    const email = event.target.email.value
    await sendMagicLink(email)
    await updateUserPermissions(email)
    setHasSent(true)
  }

  const { isLoggedIn } = useUser()

  if (isLoggedIn) {
    return (
      <div className='text-center'>
        <span className='bg-adhdDarkPurple hover:bg-adhdPurple p-2 px-3 rounded-lg cursor-pointer inline-block' onClick={() => signOut()}>Sign out</span>
      </div>
    )
  }

  return (
    <section className="flex items-center justify-center bg-white rounded-lg py-12 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-5">
        <header className='text-center max-w-sm space-y-2'>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
            Sign in via email<br />to access Leader tools
          </h2>
          {/* <p className='text-gray-600'>Use the address that ADHD Together sends reminder emails to.</p> */}
        </header>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Your ADHD Together email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your ADHD Together email address"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-4 w-4 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Send me login details
            </button>
            {hasSent && (
              <ShowFor seconds={5}>
                <div className='text-center text-adhdPurple bg-green-100 px-4 py-2 mt-2 rounded-lg'>Login details sent ✅ Go check your inbox.</div>
              </ShowFor>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}