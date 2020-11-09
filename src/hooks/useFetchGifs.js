import {useState, useEffect} from 'react';
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = ( category ) =>{
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    
    // const [images, setImages] = useState([]);
    // useEffect(()=>{
    //     getGifs(category)
    //         .then(setImages);
    // }, [category])
    

    useEffect(()=>{

        getGifs(category)
            .then(imgs =>{
                setState({
                    data: imgs,
                    loading:false,
                })
            })

    }, [category])
   

    return state;



}