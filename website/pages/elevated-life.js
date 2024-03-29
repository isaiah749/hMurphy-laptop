import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import bannerOne from '../styles/Images/banner1.jpg'
import RevisionForm from '../components/RevisionForm'
import vertTwo from '../styles/Images/personal.jpg'
import ElevateForm from '../components/ElevateForm'

const elevatedLife = () => {
  return (
    <main className='min-h-screen w-full bg-white'>

        <Head>
            <title>HMMurphy - Life Elevation</title>
        </Head>

        <header className="w-full">
            <Navbar />
        </header>


        <div className="relative border-b-2 border-black h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image src={bannerOne} layout='fill' objectFit='cover' />

            <div className="flex absolute items-center w-full mx-auto pt-[4.5rem] lg:pt-[5.5rem] md:my-8 lg:my-5 justify-center">
                    <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                    <h1 className="text-center text-3xl text-black sm:text-5xl lg:text-6xl title-font font-bold ">Elevate Your Life</h1>
                    <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
            </div>

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-md font-[Poppins] sm:text-lg font-bold">Let me be your guide. </p>
                <button className="bg-yellow-400 font-[Poppins] rounded-full py-4 px-10 font-bold my-3 hover:shadow-xl active:scale-90 transition text-[1.1rem] duration-500 text-black hover:bg-yellow-300 shadow-lg">Contact me</button>
            </div>
        </div>
        


        <section className="bg-white text-black w-full px-2 lg:px-0 ">

            <div className="flex items-center w-full mx-auto pb-5 lg:pb-0 pt-[2rem] md:my-4 lg:my-3 justify-center ">
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                    <h1 className="text-center text-3xl text-black lg:text-5xl title-font font-bold ">About Fairytaling</h1>
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
            </div>

            <section className="w-full lg:w-[85%] border-b-2 border-white  grid grid-cols-1 md:grid-cols-2 mx-auto p-5 font-[Poppins] ">


                <div className="w-full p-10 text-center">
                    <p className="text-lg lg:mt-16 ">
                        <span className="text-3xl italic block pb-2 font-semibold text-yellow-400">Recognizing Your Current Path </span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure velit fugit nemo quidem sequi consequuntur, sunt repellendus quasi accusantium numquam? Temporibus blanditiis odio enim quidem nisi voluptatibus iste tempora a.
                    </p>
                    <p className="text-lg  mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi iste voluptate ratione itaque iusto, sunt quia ab officiis provident aperiam ipsum temporibus vel animi ut. Aut at molestiae magnam!</p>
                    <button className="mt-5 border-2 border-yellow-400 py-2 text-lg px-4 font-semibold hover:bg-yellow-400 hover:text-black transition duration-500 ">Contact me</button>
                </div>
                <div className="h-[300px] md:h-[500px] w-full relative ">
                        <Image src={bannerOne} layout='fill' className='' objectFit='cover' />
                </div>


                <div className="h-[300px] mt-10 md:mt-0 lg:mt-0 md:h-[500px] w-full relative ">
                        <Image src={bannerOne} layout='fill' className='' objectFit='cover' />
                </div>
                <div className="w-full p-10 text-center">
                    <p className="text-lg lg:mt-16 ">
                        <span className="text-3xl italic block pb-2 font-semibold text-yellow-400">Adjusting To Changes </span>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure velit fugit nemo quidem sequi consequuntur, sunt repellendus quasi accusantium numquam? Temporibus blanditiis odio enim quidem nisi voluptatibus iste tempora a.
                    </p>
                    <p className="text-lg  mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi iste voluptate ratione itaque iusto, sunt quia ab officiis provident aperiam ipsum temporibus vel animi ut. Aut at molestiae magnam!</p>
                    <button className="mt-5 border-2 border-yellow-400 py-2 text-lg px-4 font-semibold hover:bg-yellow-400 hover:text-black transition duration-500 ">Contact me</button>
                </div>
            </section>
        </section>

        <div className="flex items-center w-full mx-auto pb-5 lg:pb-0 pt-[2rem] md:my-4 lg:my-3 justify-center ">
            <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                <h1 className="text-center text-4xl text-black lg:text-5xl title-font font-bold ">Contact Me</h1>
            <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
        </div>

        <div className="lg:flex w-full lg:-space-x-[15rem] lg:items-center space-y-5 lg:space-y-0 lg:justify-center">
            <div className="h-[400px] md:h-[500px] xl:h-[600px] w-full 2xl:h-[700px] relative ">
                <Image src={vertTwo} layout='fill' objectFit='contain' />
            </div>
            <div className="w-full">
                <ElevateForm />
            </div>
        </div>



    </main>
  )
}

export default elevatedLife


