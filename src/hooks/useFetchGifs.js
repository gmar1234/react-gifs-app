import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        
        getGifs(category).then(
            imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            }
        )

    }, [ category ]); // se ejecunta dentro de la funcion cuand el compoente es ejecutdo pro priemra ves
    
    return state // data: [ ] , loagind: true
}