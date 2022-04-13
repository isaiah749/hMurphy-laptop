import React, { useEffect } from 'react'
import Image from 'next/image'
import vertOne from '../styles/Images/vert1.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceOne = () => {
    // In View is boolean and is true when in view and false when it is not

    // Ref has to be assigned to the element that we want to monitor

    const {ref, inView} = useInView()

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring',
                    duration: .9,
                    bounce: 0.3
                }
            })
        }
        if (!inView) {
            animation.start({
                x: '-100vw'
            })
        }
        console.log('use effect hook, inview = ', inView)
    }, [inView])

    return (
        <div className='h-[100vh] md:h-[70vh] px-2 relative pt-[3rem] w-full'>
            
            <div className="flex items-center md:my-8 lg:my-5 justify-center">
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 mr-5"></div>
                <motion.div initial='hidden' animate='visible' 
                     variants={{
                        hidden: {
                            scale: .8,
                            opacity:0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .2
                            }
                        },
                    }}
                >
                <h1 ref={ref} className="text-center text-4xl sm:text-5xl title-font font-bold ">Elevated Living</h1>
                </motion.div>
                <div className="border-2 border-yellow-400 h-[.25px] w-14 md:w-24 ml-5"></div>
            </div>

            <div className="md:flex md:items-center md:justify-center w-full md:px-5 md:py-5 px-2 py-2 ">

                <motion.div className='w-full'
                    animate={animation}
                >
                    <div className="font-[Poppins] xl:pl-[12rem] w-full">

                        <p className="text-2xl md:text-4xl italic text-yellow-400 ">Follow Me and</p>
                        <p className="text-xl md:text-3xl italic text-gray-400 ml-5">Find Yourself</p>

                        <p className="my-4 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                        <p className="my-4 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>
                        <p className="my-4 md:my-8 md:text-lg text-gray-400 max-w-[750px] ml-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat quia soluta rem non consequuntur eveniet, cupiditate tenetur animi aliquid molestias incidunt culpa laborum labore veritatis. Animi incidunt illum architecto.</p>

                        <div className="flex w-full items-center justify-center mb-5 ">
                            <button className="font-[Poppins] text-lg md:text-xl border-2 border-yellow-400 py-2 px-4 font-semibold hover:bg-black hover:text-yellow-400 transition duration-500 ml-5 ">Learn More</button>
                        </div>

                    </div>

                </motion.div>

                <motion.div className='w-full'
                    initial={{ x: '200vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
                >
                    <div className="h-[400px] md:h-[500px] xl:h-[600px] w-full 2xl:h-[700px] relative ">
                        <Image src={vertOne} layout='fill' objectFit='contain' />
                    </div>
                </motion.div>

            </div>

            
    
        </div>
      )
}

export default ServiceOne