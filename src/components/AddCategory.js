
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCat}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange =(e)=>{
        setInputValue(e.target.value);
    }

    const hendleSumit =(e) => {
        //esto no deja que cada vez que le des entre se refresque toda la paguina 
        e.preventDefault();

        //esto no deja que lo que se escriba en la caja de texto sea menor a dos letras
        if( inputValue.trim().length > 2 ){
             //console.log('Sumit echo');
             //asi es como se cominica con el otro componente
        setCat(cats =>[inputValue,...cats ]);
        setInputValue('');
        }

        
    }
  return (
        <form onSubmit={hendleSumit}>
        <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}

        /> 

        </form>
  )
};

AddCategory.propTypes={
    setCat: PropTypes.func.isRequired
}