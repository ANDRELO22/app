
import React, {/*useState, useEffect*/} from 'react';
import {useFectchGifs} from '../hooks/useFectchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GrifGridItem } from './GrifGridItem';

export const GifGrid = ({category}) => {

  //const [caunt, setCaunt] = useState(0);

  //const [images, setImages] = useState([ ]);
  //esto le dice al codigo que serenderise solo por primera vez y no cada ves que no note un cambio
    //useEffect( () => {
    //getGifs( category )
    //.then(setImages)
  //},[ category ])

  //un ejemplo
  const {data:images, loading} = useFectchGifs(category);

    
    


  return (
        <>
        <h3 className="animate__animated animate__bounce"> { category }</h3>

        {loading && <p className="animate__animated animate__flash">Esperame bro voy en camino...</p> }
     
        
        <div className="card-grid ">
        
        
        
        {
        images.map( img =>(
          <GrifGridItem
          key= {img.id}
          {...img}
          />
        ))
        }
        
        
  </div>
      
      </>
  )
};
