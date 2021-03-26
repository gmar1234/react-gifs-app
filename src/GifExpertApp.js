import React, { useState}from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['one', 'samurau','Goku'];

    const [categories, setCategories] = useState(['One Piece'])


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={ setCategories } />
            <hr /> 
            <ol>
                {
                    categories.map((category, i) => (
                        <GifGrid
                            
                            key={category}
                            category={category} />

                    ))
                }
            </ol>
        </>
    )
}