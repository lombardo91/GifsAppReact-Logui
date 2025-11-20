import type { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock";


interface Props {
    gifs: Gif[];
}


export const GifList: FC<Props> = ( {gifs} ) => {
  return (
     <div className="gifs-container">
        {
            gifs.map ( (gifs) => (
                <div key={gifs.id} className='gif-card'>
                    <img src={ gifs.url} alt={gifs.title} />
                    <h3>{ gifs.title }</h3>
                    <p>
                        { gifs.width }x{ gifs.height } (1.5mb)
                    </p>
                </div>
            ))
        }

        </div>
  )
}
