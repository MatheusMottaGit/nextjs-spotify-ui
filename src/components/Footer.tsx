import React from 'react'

import Image from 'next/image'

import continnum from '../../public/continnum.jpg'
import { Heart, ListVideo, Mic2, MonitorSpeaker, PauseCircle, RotateCcw, Shuffle, SkipBack, SkipForward, Tv2, Volume1 } from 'lucide-react'
import { LoadUserProps } from '@/database/database'

const Footer = async () => {

  const response = await LoadUserProps()
  const user = response.user

  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img 
            src={user.albuns[0].wallpaper} 
            alt="Continnum album"
            width={80}
            height={80}
            className="rounded"
          />
          <div className='flex flex-col text-sm font-semibold'>
            <p>I'm gonna find another you</p>
            <p className='text-xs text-zinc-400'>John Mayer</p>
          </div>
          <div className='flex gap-3 ml-6'>
            <Heart size={15}/>
            <Tv2 size={15}/>
          </div>
        </div>

        <div className='flex flex-col gap-2 mr-36'>
          <div className='flex items-center justify-center gap-3'>
           <Shuffle size={15}/>
           <SkipBack size={20}/>
           <PauseCircle size={40}/>
           <SkipForward size={20}/>
           <RotateCcw size={15}/>
          </div>
          <div className='flex items-center gap-2 text-[10px] text-zinc-400'>
            3:06
            <div className='w-[800px] rounded-full bg-zinc-500 mt-2'>
                <div className='w-[600px] rounded-full bg-zinc-300 h-full p-0.5'></div>
            </div>
            4:02
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Mic2 size={15}/>
          <ListVideo size={15}/>
          <MonitorSpeaker size={15}/>
          <Volume1 size={15}/>
          <div className='w-[100px] rounded-full bg-zinc-300 p-0.5'></div>
        </div>
    </footer>
  )
}

export default Footer