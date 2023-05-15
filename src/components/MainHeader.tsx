import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const MainHeader = () => {
  return (
          <header className="w-full flex justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-black flex items-center justify-center rounded-full h-[30px] w-[30px] cursor-pointer">
                <ChevronLeft/>
              </div>
              <div className="bg-black flex items-center justify-center rounded-full h-[30px] w-[30px] cursor-pointer">
                <ChevronRight/>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white text-zinc-950 font-semibold text-sm flex items-center justify-center rounded-full h-[35px] w-[120px] cursor-pointer">
                Faça upgrade
              </div>
              <div className="bg-zinc-800 font-semibold text-sm flex items-center justify-center rounded-full h-[35px] w-[150px] cursor-pointer">
                Instalar aplicativo
              </div>
            </div>
          </header>
  )
}

export default MainHeader