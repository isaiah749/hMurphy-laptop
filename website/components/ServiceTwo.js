import React from 'react'
import Image from 'next/image'
import vertTwo from '../styles/Images/vert2.jpg'

const ServiceTwo = () => {
    return (
        <div className='h-[100vh] md:h-[70vh] px-2 relative pt-[3rem] w-full'>
            
            <div className="flex items-center pb-2 md:pb-0 md:my-8 lg:my-5 justify-center">
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                <h1 className="text-center text-3xl text-white sm:text-5xl title-font font-bold ">Rewrite Your Story</h1>
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
            </div>

            <div className="md:flex md:items-center md:justify-center w-full md:px-5 md:py-5 px-2 py-2 ">


                <div className="h-[400px] md:h-[500px] xl:h-[600px] w-full 2xl:h-[700px] relative ">
                    <Image src={vertTwo} layout='fill' objectFit='contain' />
                </div>

                <div className="font-[Poppins] mt-5 md:mt-0 w-full">
                    
                    <p className="text-2xl md:text-4xl italic text-yellow-400 ">Re-Create Yourself and</p>
                    <p className="text-xl md:text-3xl italic text-gray-400 ml-5">Find New Experiences</p>

                    <p className="my-4 md:my-8 md:text-lg text-gray-200 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                    <p className="my-4 md:my-8 md:text-lg text-gray-200 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                    <p className="my-4 md:my-8 md:text-lg text-gray-200 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>

                    <div className="flex w-full items-center xl:-ml-[5rem] justify-center mb-5 ">
                        <button className="font-[Poppins] text-lg text-yellow-400 md:text-xl border-2 border-yellow-400 py-2 px-4 font-semibold hover:bg-yellow-400 hover:text-black transition duration-500 ml-5 ">Learn More</button>
                    </div>

                </div>
            </div>

            
    
        </div>
      )
}

export default ServiceTwo