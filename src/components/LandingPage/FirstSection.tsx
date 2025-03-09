'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { slideUp } from '@/styles/animations'

function FirstSection() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        (
            async () => {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000);
            }
        )()
    }, [])

    return (
        <div className="lg:h-[calc(100vh-60px)] h-[calc(100vh-160px)] grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 gap-[5px]">
            <div className="bg-[#367BC1] w-full row-span-2 md:row-span-1 relative">
                <AnimatePresence mode='wait'>
                    {
                        isLoading && <motion.div variants={slideUp} initial="initial" exit="exit" className="bg-[#000000] w-full h-full absolute cursor-wait"></motion.div>
                    }
                </AnimatePresence> 
                <div className='py-3 px-5 sm:py-5 sm:px-8'>
                    <p className="text-[#ffffff] text-[24px] sm:text-[34px] font-[300]">
                        Rianul Amin Rian
                    </p>
                    <p className="mt-2 text-[#ffffff] text-[12px] sm:text-[14px] font-[400]">
                        I specialize in full-stack development and blockchain, building scalable apps with NestJS, NextJS, .NET, and Solidity. Currently pursuing my B.Sc. in CSE at AIUB.
                    </p>
                </div>
            </div>

            <div className="bg-[#ffffff] w-full flex items-center justify-center col-span-1 md:col-span-1"></div>

            <div className="row-span-2 grid grid-cols-2 grid-rows-2 gap-[5px]">
                <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>

                <div className="grid grid-cols-2 grid-rows-2 gap-[5px]">
                    <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
                    <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
                    <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
                    <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
                </div>

                <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
                <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
            </div>

            <div className="row-span-2 bg-[#ffffff] w-full flex items-center justify-center"></div>
        </div>
    )
}

export default FirstSection