import Footer from "@/components/Footer";
import Aside from "@/components/Aside";
import MainHeader from "@/components/MainHeader";
import { LoadUserProps, User } from "@/database/database";
import { Suspense } from "react";
import AsideLoading from "@/components/AsideLoading";
import LatestSongs from "@/components/LatestSongs";
import LatestSongsLoading from "@/components/LatestSongsLoading";
import MadeFor from "@/components/MadeFor";
import LoadingMadeFor from "@/components/LoadingMadeFor";
import FooterLoading from "@/components/FooterLoading";

export default async function Home() {

  const response = await LoadUserProps()
  const user = response.user

  return (
    <div className="h-screen flex flex-col">

      <div className="flex flex-1">
        <Suspense fallback={
          <AsideLoading>
            {user.playlists.map(item => {
              return (
                <a href="" key={item.id} className= {`h-[150px] flex items-center gap-3 hover:bg-zinc-900`}>
        
                  <div className='rounded h-16 w-20 bg-zinc-700 animate-pulse'></div>

                  <div className="flex flex-col gap-1">
                    <p className="p-2 bg-zinc-700 rounded-full animate-pulse w-28"></p>
                    <p className="p-2 bg-zinc-700 rounded-full animate-pulse w-48"></p>
                  </div>

                </a>
              )
            })}
          </AsideLoading>
        }>
          {/* @ts-expect-error Async Server Component */}
          <Aside />
        </Suspense>

        <main className="flex-1 p-6">

          <MainHeader/>

          <section className="w-full h-full mt-6 space-x-6">
            <div className="w-full flex flex-col">
              <h1 className={`text-3xl font-bold ml-2`}>
                Bom dia
              </h1>
              <Suspense fallback={
                <LatestSongsLoading>
                  {user.lastSongs.map(item => {
                    return (
                      <a href="" key={item.id} className='bg-zinc-600/10 w-[480px] h-[90px] flex items-center gap-4 rounded-lg overflow-hidden hover:bg-zinc-800 hover:delay-75 hover:transition hover:ease-in-out'>
                        <div className="h-[90px] w-[90px] bg-zinc-700 animate-pulse"></div>    
                        <p className="bg-zinc-700 p-2 rounded-full w-2/4 animate-pulse"></p>  
                      </a>
                    )
                  })}
                </LatestSongsLoading>
              }>
                {/* @ts-expect-error Async Server Component */}
                <LatestSongs/>
              </Suspense>
              <div className="w-full flex flex-col mt-12">
                <h1 className="text-xl font-bold ml-2">
                  Feitos para {user.name}
                </h1>
                <Suspense fallback={
                  <LoadingMadeFor>
                    {user.albuns.map(item => {
                      return (
                        <a href="" key={item.id} className="bg-zinc-600/10 gap-5 flex flex-col items-center justify-center w-[200px] h-[250px] rounded-lg hover:bg-zinc-800 hover:transition hover:ease-in-out hover:delay-75">
                          <div className="rounded h-36 w-36 bg-zinc-700 animate-pulse"></div>
                        
                          <div className="flex flex-col w-3/4 ml-5">
                            <div className="rounded-full w-3/4 bg-zinc-700 text-zinc-700 mb-2 -ml-2 animate-pulse">dhd</div>
                            <div className="rounded-full w-2/4 bg-zinc-700 text-zinc-700 -ml-2 animate-pulse">dhd</div>
                          </div>
                        </a>
                      )
                    })}
                  </LoadingMadeFor>
                }>
                  {/* @ts-expect-error Async Server Component */}
                  <MadeFor/>
                </Suspense>
              </div>
            </div>
          </section>
          
        </main>
      </div>

      <Suspense fallback={<FooterLoading/>}>
        {/* @ts-expect-error Async Server Component */}
        <Footer/>
      </Suspense>

    </div>
  )
}
