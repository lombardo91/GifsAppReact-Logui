interface buscador{
  place?:string,
}

const Buscador = ({place='Buscadorrr'}:buscador)  => {
  return (
      <div className='search-container'>
    <input type="text" placeholder={place}/>
    <button>Buscar</button>
    </div>
  )
}

export default Buscador
