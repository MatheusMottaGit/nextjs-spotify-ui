import React from 'react'
import { LoadUserProps } from '@/database/database'
import { RxTriangleRight } from 'react-icons/rx'
import Image from 'next/image'

const LatestSongs = async () => {

  const response = await LoadUserProps()
  const user = response.user

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2 gap-y-4 mt-6">
      {user.lastSongs.map(item => {

        return (
          <a href="" key={item.id} className={`bg-zinc-600/10 w-[480px] h-[90px] flex items-center gap-4 rounded-lg overflow-hidden hover:bg-zinc-800 hover:delay-75 hover:transition hover:ease-in-out`}>
            <Image src={item.wallpaper} height={90} width={90} alt="album" />
            <div className='flex items-center justify-between w-4/6 group transition gap-2'>
              <p className="text-sm font-semibold">{item.name}</p>
              <div className='rounded-full bg-green-500 w-10 h-10 items-center hidden group-hover:block group-hover:delay-0 delay-75 ease-in-out'>
                <RxTriangleRight color='black' size={40} />
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default LatestSongs