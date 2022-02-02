import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch','Samurai x','Dragon Boll']
  const [categories, setCategories] = useState(['One Punch']);

  //const handle =() =>{
    //setCategories([...categories, 'brayan']);

    //setCategories(cats =>[...cats,'brayan' ])
  //}
  


  return <>
  <h2> GifExpertApp </h2>
  <AddCategory  setCat={ setCategories }/>
  <hr/>
  <ol>
    {
      categories.map((category) => (
       <GifGrid key={category }
              category= {category} />
      ))
    }
  </ol>
  </>
};






