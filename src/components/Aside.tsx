import React, { useEffect, useState } from 'react'
import { HomeIcon, Library, Search } from 'lucide-react'
import { LoadUserProps, User } from '@/database/database'

const Aside = async () => {

  const response = await LoadUserProps()
  const user = response.user

  return (
        <aside className="w-96 bg-zinc-950 p-6">
          <nav className='space-y-5 h-[150px]'>
            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 font-semibold hover:text-zinc-300'>
              <HomeIcon/>
              Início
            </a>
            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 font-semibold hover:text-zinc-300'>
              <Search/>
              Pesquisar
            </a>
            <a href="" className='flex items-center gap-3 text-sm text-zinc-400 font-semibold pt-6 hover:text-zinc-300'>
              <Library/>
              Sua biblioteca
            </a>
          </nav>
          <nav className="h-[500px] mt-5 gap-3 flex flex-col text-zinc-400 justify-start">
            {user?.playlists.map(item => {

              return (
                (
                  <a href="" key={item.id} className= {`h-[150px] flex items-center gap-3 hover:bg-zinc-900`}>                  
                    <img src={item.wallpaper} alt='' className='rounded h-12 w-12'/>    
                    <div className="flex flex-col gap-1">
                     <p>{item.name}</p>
                     <p>Playlist - {user.name}</p>
                    </div>
                  </a>
                )
              )
            })}
          </nav>
        </aside>
  )
}

export default Aside
