
import { GifList } from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'

export const GifsApp = () => {
  return (
    <>

    {/*  Header  */}
        < CustomHeader 
        title="Buscador de Gifs" 
        description="Busca tu Gifs Preferido" 
        />

    {/*  Search  */}
      <SearchBar placeholder="Busca lo que imagines" />


    {/*  Busquedas Previas  */}
      <PreviousSearches searches={['Goku','Bellota', 'Doby']}/>

    {/*  Gifs  */}
      <GifList gifs={mockGifs} />
       


    </>
  )
}
