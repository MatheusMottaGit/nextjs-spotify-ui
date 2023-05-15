'use client'

import { HomeIcon, Library, Search } from 'lucide-react'
import React from 'react'

const AsideLoading = ({children}: any) => {
  return (
    <aside className="w-96 bg-zinc-950 p-6">
          <nav className='space-y-5 h-[150px]'>
            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 font-semibold'>
              <HomeIcon/>
              Início
            </a>
            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 font-semibold'>
              <Search/>
              Pesquisar
            </a>
            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 font-semibold pt-6'>
              <Library/>
              Sua biblioteca
            </a>
          </nav>
          <nav className="h-[500px] mt-5 gap-3 flex flex-col text-zinc-400 justify-start">
            {children}
          </nav>
        </aside>
  )
}

export default AsideLoading
{/* {user?.playlists.map(item => {

  return (
    (
      <a href="" key={item.id} className= {`h-[150px] flex items-center gap-3 hover:bg-zinc-900`}>
        
        <img src={item.wallpaper} alt='' height={80} width={70} className='rounded'/>

        <div className="flex flex-col gap-1">

         <p>Playlist - {user.name}</p>

        </div>
      </a>
    )
  )
})} */}