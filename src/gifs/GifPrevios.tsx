import type { FC } from "react";

interface Props {
  searches: string[];
}

const GifPrevios: FC<Props> = (searches) => {
  return (
  <div className="previous-searches">
          <h2>Busquedas Previas</h2>
  
          <ul className="previous-searches-list">
           {searches.searches.map((term) => (
            <li key={term}>{term}</li>
           ))}
          </ul>
       </div>
  )
}

export default GifPrevios
