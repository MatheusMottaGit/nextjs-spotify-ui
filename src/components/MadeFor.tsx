import { LoadUserProps } from '@/database/database'
import React from 'react'

const MadeFor = async () => {

    const response = await LoadUserProps()
    const user = response.user

  return (
                <div className="flex items-center mt-6 gap-14">
                  {user.albuns.map(item => {

                    return (
                      <a href="" key={item.id} className="bg-zinc-600/10 gap-5 flex flex-col items-center justify-center w-[200px] h-[270px] rounded-lg hover:bg-zinc-800 hover:transition hover:ease-in-out hover:delay-75">
                        
                        <img src={item.wallpaper} className="rounded h-36" alt=""/>

                        <div className="flex flex-col w-3/4 ml-5">
                          
                          <p className="text-zinc-300 font-semibold -ml-2">{item.name}</p> 
                          <p className="text-sm text-zinc-400 -ml-2">{item.artist}</p>
                            
                        </div>
                      </a>
                    )
                  })}
                </div>
  )
}

export default MadeFor