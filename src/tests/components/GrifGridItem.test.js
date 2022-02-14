import React from 'react'
import  { shallow } from 'enzyme';
import { GrifGridItem } from '../../components/GrifGridItem';


describe('pruebas en <GrifGridItem />', () =>{

    const title= 'un titulo¡¡';
    const url = 'http://localhost/cualquiercosa.jpg'
    const wrapper = shallow(<GrifGridItem  title={title} url={url} />);
    test('debe mostrar el componente correctamente', () => {
        
    
    expect(wrapper).toMatchSnapshot();
    })
    test('debe tener un parrafo con el titulo', () => { 
        const p = wrapper.find('p')
        expect( p.text().trim()).toBe( title )
    })

    test('debe de tener la imagen igal al url y el alt de las prop', () => { 
        const img = wrapper.find('img')
        console.log(img.props('src'))
    })
}) 