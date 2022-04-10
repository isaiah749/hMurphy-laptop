import React from 'react'
import Image from 'next/image'
import personal from '../styles/Images/personal.jpg'

const ServiceOne = () => {
    return (
        <div className='h-[100vh] px-2 relative pt-[3rem] w-full'>
            
            <div className="flex items-center lg:mb-5 justify-center">
                <div className="border-2 border-yellow-300 h-[.25px] w-14 md:w-24 mr-5"></div>
                <h1 className="text-center text-4xl sm:text-5xl title-font font-bold ">Elevated Living</h1>
                <div className="border-2 border-yellow-300 h-[.25px] w-14 md:w-24 ml-5"></div>
            </div>

            <div className="space-y-6 mx-auto h-full w-full md:space-y-0 md:flex md:items-center md:justify-around lg:px-[2.5rem] lg:pt-[10rem] xl:px-[4rem] ">

                {/* Left Container */}
                <div className="px-2 w-full md:-mt-[26rem] lg:-mt-[16rem] xl:-mt-[30rem] ">

                    <div className="py-2 md:py-0 md:-mt-5 lg:mb-[1rem] ">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[Poppins] italic font-semibold text-yellow-300">Follow Me and</h2>
                        <p className="text-xl sm:text-2xl md:text-3xl -mt-1 md:-mt-0 ml-4 font-[Poppins] italic text-gray-900">Find Yourself</p>
                    </div>

                    <p className="font-[Poppins] text-md pt-3 max-w-[600px] text-gray-500 md:text-lg ml-4 md:ml-2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, hic facilis officia cum animi cumque laboriosam accusantium libero nostrum expedita sequi porro temporibus consequatur aliquid, voluptatum quam eligendi, fugit quo.</p>
                    <p className="font-[Poppins] text-md pt-3 max-w-[600px] text-gray-500 md:text-lg ml-4 md:ml-2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, hic facilis officia cum animi cumque laboriosam accusantium libero nostrum expedita sequi porro temporibus consequatur aliquid, voluptatum quam eligendi, fugit quo.</p>
                    <p className="font-[Poppins] text-md pt-3 max-w-[600px] text-gray-500 md:text-lg ml-4 md:ml-2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, hic facilis officia cum animi cumque laboriosam accusantium libero nostrum expedita sequi porro temporibus consequatur aliquid, voluptatum quam eligendi, fugit quo.</p>

                    <div className="flex items-center justify-center mt-5 max-w-[600px] ">
                        <button className="border-2 w-[max-content] px-2 py-1 border-yellow-400 font-[Poppins] text-center text-md md:text-xl lg:px-4 lg:py-2 ">Learn More</button>
                    </div>

                    


                </div>

                {/* Right Container */}
                <div className="p-2 ">

                    <div className="h-full mx-auto w-[300px] md:w-[400px] md:-mt-[26rem] lg:-mt-[16rem] xl:-mt-[22rem]  ">
                        <img src='/vert1.jpg' className='w-full' alt='personal' />
                    </div>
                </div>

            </div>
            
    
        </div>
      )
}

export default ServiceOne