'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { slideRight, slideUp } from '@/styles/animations'

function FirstSection() {
    const [isBioLoading, setIsBioLoading] = useState(true)
    const [isTimeLoading, setIsTimeLoading] = useState(true)
    const colors = ["#FF5733", "#70A738", "#56BCEE", "#2C65F5"];
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useEffect(()=>{
        (
            async () => {
                setTimeout(() => {
                    setIsBioLoading(false)
                }, 1000);
                setTimeout(() => {
                    setIsTimeLoading(false)
                }, 800);
            }
        )()
    }, [])

    return (
        <div className="lg:h-[calc(100vh-60px)] h-[calc(100vh-160px)] grid grid-cols-1 md:grid-cols-2 grid-rows-6 md:grid-rows-3 gap-[5px]">
            <div className="bg-[#367BC1] w-full h-full row-span-2 md:row-span-1 relative">
                <AnimatePresence mode='wait'>
                    {
                        isBioLoading && <motion.div variants={slideUp} initial="initial" exit="exit" className="bg-[#000000] w-full h-full absolute cursor-wait"></motion.div>
                    }
                </AnimatePresence> 
                <div className='h-full py-3 px-5 sm:py-5 sm:px-8 flex flex-col justify-between'>
                    <div>
                        <p className="text-[#ffffff] text-[24px] sm:text-[34px] font-[300]">
                            Rianul Amin Rian
                        </p>
                        <p className="mt-2 text-[#ffffff] text-[12px] sm:text-[14px] font-[400]">
                            I specialize in full-stack development and blockchain, building scalable apps with NestJS, NextJS, .NET, and Solidity. Currently pursuing my B.Sc. in CSE at AIUB.
                        </p>
                    </div>
                    <div className='mb-2'>
                        <a 
                            href="/files/RianulAminResume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center justify-end gap-2'
                        >
                            <p className="text-[#ffffff] text-[12px] sm:text-[14px] font-[400]">View My Resume</p>
                            <svg className='mt-1' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_2631_26715)">
                                <path d="M15.0001 4.1665C15.2212 4.1665 15.4331 4.2543 15.5894 4.41058C15.7457 4.56686 15.8335 4.77882 15.8335 4.99984V11.6665C15.8335 11.8875 15.7457 12.0995 15.5894 12.2558C15.4331 12.412 15.2212 12.4998 15.0001 12.4998C14.7791 12.4998 14.5672 12.412 14.4109 12.2558C14.2546 12.0995 14.1668 11.8875 14.1668 11.6665V7.0115L5.87515 15.3032C5.71798 15.455 5.50748 15.539 5.28898 15.5371C5.07049 15.5352 4.86147 15.4475 4.70697 15.293C4.55246 15.1385 4.46482 14.9295 4.46292 14.711C4.46102 14.4925 4.54502 14.282 4.69682 14.1248L12.9885 5.83317H8.33348C8.11247 5.83317 7.90051 5.74537 7.74423 5.58909C7.58795 5.43281 7.50015 5.22085 7.50015 4.99984C7.50015 4.77882 7.58795 4.56686 7.74423 4.41058C7.90051 4.2543 8.11247 4.1665 8.33348 4.1665H15.0001Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_2631_26715">
                                <rect width="20" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-[#56BCEE] w-full col-span-1 md:col-span-1 relative">
                <AnimatePresence mode='wait'>
                    {
                        isTimeLoading && <motion.div variants={slideRight} initial="initial" exit="exit" className="bg-[#000000] w-full h-full absolute cursor-wait"></motion.div>
                    }
                </AnimatePresence> 
                <div className='py-3 px-5 sm:py-5 sm:px-8'>
                    
                </div>
            </div>

            <div className="row-span-2 grid grid-cols-2 grid-rows-2 gap-[5px]">
                <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>

                <div className="grid grid-cols-2 grid-rows-2 gap-[5px]">
                    {colors.map((color, index: number) => (
                        <div
                            key={index}
                            className="relative w-full h-full overflow-hidden"
                            style={{ backgroundColor: color }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#000000] z-20">
                                sfsfs
                            </p>

                            <motion.div
                                initial={{ y: "-100%" }}
                                animate={{ y: hoveredIndex === index ? 0 : "-100%" }}
                                transition={{ duration: 0.5 }}
                                className="bg-white w-full h-full absolute px-3 sm:py-3 sm:px-5 z-10 cursor-pointer"
                            >
                                <a 
                                    href="/files/RianulAminResume.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="absolute bottom-3 right-3 flex items-center justify-center"
                                >
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2631_26715)">
                                            <path d="M15.0001 4.1665C15.2212 4.1665 15.4331 4.2543 15.5894 4.41058C15.7457 4.56686 15.8335 4.77882 15.8335 4.99984V11.6665C15.8335 11.8875 15.7457 12.0995 15.5894 12.2558C15.4331 12.412 15.2212 12.4998 15.0001 12.4998C14.7791 12.4998 14.5672 12.412 14.4109 12.2558C14.2546 12.0995 14.1668 11.8875 14.1668 11.6665V7.0115L5.87515 15.3032C5.71798 15.455 5.50748 15.539 5.28898 15.5371C5.07049 15.5352 4.86147 15.4475 4.70697 15.293C4.55246 15.1385 4.46482 14.9295 4.46292 14.711C4.46102 14.4925 4.54502 14.282 4.69682 14.1248L12.9885 5.83317H8.33348C8.11247 5.83317 7.90051 5.74537 7.74423 5.58909C7.58795 5.43281 7.50015 5.22085 7.50015 4.99984C7.50015 4.77882 7.58795 4.56686 7.74423 4.41058C7.90051 4.2543 8.11247 4.1665 8.33348 4.1665H15.0001Z" fill="black"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2631_26715">
                                                <rect width="20" height="20" fill="black"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
                <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
            </div>

            <div className="row-span-2 bg-[#ffffff] w-full flex items-center justify-center"></div>
        </div>
    )
}

export default FirstSection