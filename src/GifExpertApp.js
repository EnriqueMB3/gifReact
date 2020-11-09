
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export  const GifExpertApp = () =>  {

    const [categorias, setCategorias] = useState(['Rick'])




    return (
        <>
        <h2>Gif Expert App</h2>
            <hr/>
        <AddCategory setCategories={setCategorias}></AddCategory>
        <ol>
            {
                categorias.map((cat, idx) => <GifGrid category={cat} key={idx}></GifGrid>)
            }
        </ol>
        </>
    )
}
