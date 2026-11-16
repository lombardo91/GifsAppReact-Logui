interface titulo {
    titulo: string;
    desc?: string;
}

 export const ComponenteCompartido  = ({titulo, desc}:titulo) => {
  return (
   <div className='content-center'>
    <h1>{titulo}</h1>
    {desc &&  <p>{desc}</p> }
   
    </div>
  )
}




