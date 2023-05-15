import { Heart, ListVideo, Mic2, MonitorSpeaker, PauseCircle, RotateCcw, Shuffle, SkipBack, SkipForward, Tv2, Volume1 } from 'lucide-react'
import React from 'react'

const FooterLoading = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className='h-20 w-20 bg-zinc-900 text-zinc-900'>
            wfhkfjfe
          </div>
          <div className='flex flex-col text-sm font-semibold bg-zinc-900 text-zinc-900'>
            dhuw
          </div>
          <div className='flex gap-3 ml-6 text-zinc-900 bg-zinc-900'>
            dwhuw
          </div>
        </div>

        <div className='flex flex-col gap-2 mr-36'>
          <div className='flex items-center justify-center gap-3'>
           <Shuffle size={15} color='grey'/>
           <SkipBack size={20} color='grey'/>
           <PauseCircle size={40} color='grey'/>
           <SkipForward size={20} color='grey'/>
           <RotateCcw size={15} color='grey'/>
          </div>
          <div className='flex items-center gap-2 text-[10px] text-zinc-400'>
            <div className='w-[800px] rounded-full h-1 bg-zinc-500 text-zinc-500 mt-2'>
              
            </div>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Mic2 size={15} color='grey'/>
          <ListVideo size={15} color='grey'/>
          <MonitorSpeaker size={15} color='grey'/>
          <Volume1 size={15} color='grey'/>
          <div className='w-[100px] rounded-full bg-gray-500 p-0.5'></div>
        </div>
    </footer>
  )
}

export default FooterLoading