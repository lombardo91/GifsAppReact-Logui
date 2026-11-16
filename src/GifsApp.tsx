

import { ComponenteCompartido } from './compartida/componentes/ComponenteCompartido';
import Buscador from './compartida/componentes/Buscador';
import GifPrevios from './gifs/GifPrevios';
import ListadoGifs from './gifs/ListadoGifs';
import { mockGifs } from './mock-data/gifs.mock';


export const GifsApp = () => {
  return (
  <>
{/* Header */}
    <ComponenteCompartido titulo='Tu buscador de Gifs' desc='Descubre y Comparte tu GIF Preferido'/>

{/* Buscador */}
        <Buscador/>

{/* Busquedas Previas */}

     <GifPrevios searches={['GG','OP','JK']}/>

     {/* Gifs */}
     <ListadoGifs gifs={mockGifs}/>

 </>
  )
};


