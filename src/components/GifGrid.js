import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridItem } from './GridItem';




export const GifGrid = ({category}) => {

    const  { data:images ,  loading } = useFetchGifs(category);
   

  

    return (
        <>
        <h3>
            {category}
        </h3>
        {loading && <p>Loading...</p>}
        
        <ol className="card-grid">
        {
            images.map(img => (
              <GridItem key={img.id} {...img}></GridItem>
            ))
        }
        </ol>
        
        </>
        
    )}
