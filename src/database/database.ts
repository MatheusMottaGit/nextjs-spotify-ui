export interface User {
    id: number, 
    name: string, 
    playlists: Playlist[], 
    albuns: Albuns[],
    lastSongs: LastSongs[]
}

interface Response {
  user: User
}

interface Playlist {
    id: number,
    name: string,
    wallpaper: string
}

interface Albuns {
    id: number,
    name: string,
    wallpaper: string
    artist: string
}

interface LastSongs {
    id: number,
    name: string,
    wallpaper: string
}

export async function LoadUserProps(): Promise<Response>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
              user: {
                id: 12,
                name: 'Matheus Domingues',
                albuns: [
                  {id: 3454, name: 'Continnum', artist: 'John Mayer', wallpaper: 'https://images.genius.com/b5a992fc23abc908c5581655bafbd622.640x640x1.jpg'},
                  {id: 3489, name: 'Where the Light Is', artist: 'John Mayer', wallpaper: 'https://www.soundcph.dk/wp-content/uploads/2018/12/Mayer-John-Where-The-Light-Is-vinyl.jpg'},
                  {id: 3254, name: 'The Gateway', artist: 'Red Hot Chilli Peppers', wallpaper: 'https://bloximages.newyork1.vip.townnews.com/heraldstandard.com/content/tncms/assets/v3/editorial/9/d9/9d976ef4-a6ff-5362-8ee0-f056c197c399/576aa73fe9462.image.jpg?resize=1200%2C1111'},
                  {id: 2155, name: 'Wasting Light', artist: 'Foo Fighters', wallpaper: 'https://media.senscritique.com/media/000004797993/source_big/Wasting_Light.jpg'},
                  {id: 1323, name: 'Depois do Fim', artist: 'Lagum', wallpaper: 'https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2023/04/LAGUM_ALBUM_DEPOISDoFIM_CAPA-2-1-1536x1536.jpg'},
                  {id: 1323, name: 'X (Deluxe Edition)', artist: 'Ed Sheeran', wallpaper: 'https://4.bp.blogspot.com/-5sqUbLizJO8/VyDWdr277aI/AAAAAAAAxu4/8wFDiiRONrQrRPU57isgzmmqXxBuJ1Z9ACLcB/s1600/Ed-Sheeran-x-2014-1200x1200.png'},
                ],
                playlists: [
                  {id: 2314, name: 'coding', wallpaper: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9'},
                  {id: 783, name: 'groovy ones', wallpaper: 'https://wallpapercave.com/wp/EwLYKOs.jpg'},
                  {id: 3323, name: 'academia', wallpaper: 'https://wallpapercave.com/wp/wp2483038.jpg'},
                  {id: 3287, name: 'brasil sil sil', wallpaper: 'https://wallpaperaccess.com/full/4695093.jpg'},
                  {id: 5444, name: 'everyday I have the blues', wallpaper: 'https://wallpaperaccess.com/full/2962711.jpg'},
                  {id: 5767, name: 'meio contemplativo', wallpaper: 'https://www.papeldeparede.etc.br/fotos/wp-content/uploads/Cadeira8.jpg'},
                  {id: 12334, name: 'calm down', wallpaper: 'https://i.pinimg.com/originals/a9/63/79/a9637967d0067bb3184f32c07289af88.jpg'},
                ],
                lastSongs: [
                  {id: 34232, name: 'Slow Dancing In a Burning Room', wallpaper: 'https://images.genius.com/b5a992fc23abc908c5581655bafbd622.640x640x1.jpg'},
                  {id: 3423, name: 'Depois do fim', wallpaper: 'https://i0.wp.com/br.nacaodamusica.com/wp-content/uploads/2023/04/LAGUM_ALBUM_DEPOISDoFIM_CAPA-2-1-1536x1536.jpg'},
                  {id: 344445, name: 'When We Are Together', wallpaper: 'https://www.lahiguera.net/musicalia/artistas/the_1975/disco/12293/the_1975_being_funny_in_a_foreign_language-portada.jpg'},
                  {id: 32434, name: 'Not a Bad Thing', wallpaper: 'https://i.weltbild.de/p/the-20-20-experience-2-of-2-deluxe-edition-073508756.jpg?v=3&wp=_max'},
                  {id: 23237, name: 'FourFive Seconds', wallpaper: 'http://www.mycafe101.com/wp-content/uploads/2015/02/2015-02-05-08.36.42.jpg'},
                  {id: 33754, name: 'Something', wallpaper: 'https://media.senscritique.com/media/000006055988/source_big/Abbey_Road.jpg'},
                ]
              } 
            })
        }, 5000)
    })
}