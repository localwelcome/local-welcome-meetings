import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { getAllRooms } from '../data/room';
import { Room, RoomPermissionType } from '../types/app';
import RoomList from '../components/Rooms';
import Auth from '../components/Auth';
import CallToAction from '../components/CallToAction';
import { useUser } from '../data/auth';
import { HeroHeader, Loading } from '../components/Layout';

type IProps = {
  rooms: Room[]
}

type IQuery = {}

const Home: NextPage<IProps> = ({ rooms }) => {
  const { user, profile, permissions } = useUser()

  return (
    <div className='bg-cover w-full h-full min-h-screen w-screen' style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/57aed7ec59cc68f15750d291/1584397756816-GBZKTT3DIN6EKU9HOEC6/Layer+10.png')"}}>
      <Head>
        <title>ADHD Together</title>
        <meta name="description" content="Session rooms for ADHD Together" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroHeader />

      <main className='max-w-lg mx-auto py-5 relative space-y-5'>
        {!!user && !profile && <Loading />}
        <CallToAction key='auth' />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<IProps, IQuery> = async (context) => {
  return {
    props: {
      rooms: await getAllRooms()
    }
  }
}

export default Home
