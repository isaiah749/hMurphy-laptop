import Head from 'next/head'
import Image from 'next/image'
import Greeting from '../components/Greeting'
import Journey from '../components/Journey'
import Navbar from '../components/Navbar'
import ServiceOne from '../components/ServiceOne'
import ServiceTwo from '../components/ServiceTwo'

export default function Home() {
  return (
    <div className='h-[100vh] w-full max-w-screen '>
      
      <Head>
        <title>HMMurphy - Home</title>
      </Head>
      
      <header className="">
        <Navbar />
      </header>

      <section className=' '>
        <Greeting />
      </section>

      <section className="">
        <ServiceOne />
      </section>

      <section className="">
        <ServiceTwo />
      </section>

      <section className="">
        <Journey />
      </section>




    </div>
  )
}