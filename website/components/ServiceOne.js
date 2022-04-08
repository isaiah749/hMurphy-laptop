import React from 'react'
import Image from 'next/image'
import personal from '../styles/Images/personal.jpg'

const ServiceOne = () => {
    return (
        <div className='h-[100vh] relative border-2 border-red-500 pt-[3rem] w-full'>
            
            <div className="flex items-center justify-center">
                <div className="border-2 border-yellow-300 h-[.25px] w-24 mr-5"></div>
                <h1 className="text-center text-[2rem] md:text-5xl title-font font-bold ">Elevated Living</h1>
                <div className="border-2 border-yellow-300 h-[.25px] w-24 ml-5"></div>
            </div>

            <div className="border-2 border-green-400 mx-auto md:flex h-full w-full md:items-center md:justify-around ">

                {/* Left Container */}
                <div className="">

                    <h2 className="">Improve Your Lifestyle</h2>
                    <p className="">Find Yourself</p>


                </div>

                {/* Right Container */}
                <div className="">
                    <div className="h-[300px] w-[300px]">
                        <img src='/personal.jpg' className='w-full' alt='personal' />
                    </div>
                </div>

            </div>
            
    
        </div>
      )
}

export default ServiceOne