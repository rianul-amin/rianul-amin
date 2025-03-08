import React from 'react'

function FirstSection() {
  return (
    <div className="lg:h-[calc(100vh-60px)] h-[calc(100vh-160px)] grid grid-cols-2 grid-rows-3 gap-[5px]">
        <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>
        <div className="bg-[#ffffff] w-full flex items-center justify-center"></div>

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