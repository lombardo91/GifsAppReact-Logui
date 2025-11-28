
import { useState } from 'react'
import { GifList } from './gifs/components/GifList'
import { PreviousSearches } from './gifs/components/PreviousSearches'
//import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { getGifsByQuery } from './gifs/actions/get-gifd-by-query.actions'
import type { Gif } from './gifs/interfaces/gif.interface'


export const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([])

  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log( { term } );
  }
/* TAREAS
1-Validar que el query no esté vacío
2-Convertir el query a minúsculas y eliminar espacios en blanco
3-Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms ( si existe, no hacer nada )
4-Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo, 
es decir no puede ser un arreglo de más de 8.
*/
  const handleSearch = async( query: string = '') => {
      query = query.trim().toLocaleLowerCase();

      if( query.length === 0 ) return;
      if( previousTerms.includes(query)) return;

      const currentTerms = previousTerms.slice(0,8);

     const gifs = await getGifsByQuery(query);
     setGifs(gifs);

     currentTerms.unshift(query);
     setPreviousTerms ( currentTerms);
  }

  return (
    <>

    {/*  Header  */}
        < CustomHeader 
        title="Buscador de Gifs" 
        description="Busca tu Gifs Preferido" 
        />

    {/*  Search  */}
      <SearchBar placeholder="Busca lo que imagines" 

     /* la funcion de abajo, es la misma q la q le sigue, abreviada
     onQuery={ (query: string) => handleSearch(query) } */
     onQuery= { handleSearch }
      />


    {/*  Busquedas Previas  */}
      <PreviousSearches searches={previousTerms} onLabelClicked={( term: string) => handleTermClicked(term)}/>

    {/*  Gifs  */}
      <GifList gifs={gifs} />
       


    </>
  )
}
