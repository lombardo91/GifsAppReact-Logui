import {useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeholder?: string;

    onQuery: (query: string) => void;
}


export const SearchBar = ({ placeholder = "Buscar", onQuery }: Props) => {
  
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      onQuery( query );
    }, 700);

   return () => {
    clearTimeout(timeoutID);
   };
  },[query, onQuery]);
  
  const handleSearch = () => {
    onQuery(query);
    setQuery('');     //Setea el balor del cuadro de busqueda cuando se mande a llamar el handleSerch
  }

  const hanldeKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter'){
                handleSearch();
              }
  }
  
  return (
  <div className="search-container">
            <input 
            type="text" 
            placeholder={ placeholder }
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={hanldeKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
  )
}
