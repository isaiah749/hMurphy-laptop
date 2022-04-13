import React from 'react'
import Image from 'next/image'
import bannerFive from '../styles/Images/banner5.jpg'

const Journey = () => {
    return (
        <div className='h-[70vh] md:h-[70vh] pr-2 relative pt-[2rem] md:pt-[3rem] w-full'>
            
            <div className="flex items-center md:my-8 lg:my-5 justify-center">
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                <h1 className="text-center text-4xl text-black sm:text-5xl title-font font-bold ">My Journey</h1>
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
            </div>

            <div className="md:flex md:items-center md:justify-center w-full md:pr-5 md:py-5 pr-2 py-2 ">
                
                <div className="h-[400px] md:h-[500px] xl:h-[600px] w-full 2xl:h-[700px] -mt-[4rem] md:-mt-0 relative ">
                    <Image src={bannerFive} layout='fill' className='rounded-r-full' objectFit='contain' />
                </div>


                <div className="font-[Poppins] xl:pl-[5rem] -mt-[3rem] md:mt-0 w-full">
                    
                    <p className="text-2xl pl-4 md:text-4xl italic text-yellow-400 ">About Heather Murphy</p>
                    <p className="text-xl pl-6 md:text-3xl italic text-gray-400 ml-5">Who Am I?</p>

                    <p className="my-6 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                    <p className="my-4 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                    <p className="my-4 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>

                    <div className="flex w-full items-center xl:-ml-[5rem] justify-center mb-5 ">
                        <button className="font-[Poppins] text-lg text-black md:text-xl border-2 border-yellow-400 py-2 px-4 font-semibold hover:bg-black hover:text-yellow-400 transition duration-500 mt-2 ">More About Me</button>
                    </div>

                </div>


            </div>

            
    
        </div>
      )
}

export default Journey