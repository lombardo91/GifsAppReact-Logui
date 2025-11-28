//import axios from 'axios';
import type { GiphyResponse } from '../interfaces/giphy.response';
import type { Gif } from '../interfaces/gif.interface';
import { giphyApi } from '../api/giphy.api';
// axios, permite hacer peticiones http, herramienta poderaso  -- (npm i axios => instalar dependencias)


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {

    const response = await giphyApi<GiphyResponse>(
        '/search', 
        {
        params: {
            q:query,
            limit:10,
            // lang:'es',
            // api_key:import.meta.env.VITE_GIPHY_API_KEY,
            // api_key:'QSJ020nfSjqgBYvvgwVL8V2YTsHeVDjX'
        }
    })

    console.log(response.data);
    return response.data.data.map( (gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
        
    }))

    /* 
    fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=QSJ020nfSjqgBYvvgwVL8V2YTsHeVDjX&q=${query}=10&lang=en`
    );
    */
};