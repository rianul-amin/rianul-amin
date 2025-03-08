import React from 'react'

function NavigationMenu() {
  return (
    <>
        <div className="min-w-[250px] h-[calc(100vh-60px)] overflow-y-auto scrollbar-none px-2 py-4 space-y-2 bg-[#ffffff] hidden lg:block">
        </div>
        <div className="w-[calc(100vw-60px)] h-[100px] overflow-y-auto scrollbar-none px-2 py-4 space-y-2 bg-[#ffffff] block lg:hidden">
        </div>
    </>
  )
}

export default NavigationMenu