import React, { useState, useEffect } from 'react';
import items from '../util/data';
import axios from 'axios';
import Categories from './category';

function Menu () {
   const [menu, setMenu] = useState([]);

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios("http://localhost:8080/api/v1/menu")
            const data = response.data;
            setMenu(data);
            
        }
        fetchItems()
    },[])
    
    const itemes = menu
    console.log(itemes.category)
    const allCategories = [...new Set(itemes.map(itemes => itemes.category))];


    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all') {
            setMenu(itemes)
            return
            }
    const newItems = itemes.filter((itemes) => itemes.category === category)
    setMenu(newItems)
  }


return ( 
    <div className="bg-contain bg-white bg-opacity-70 ">
    <section className='menu section'>
    <div className='title'>
      <h2>our menu</h2>
      <div className='underline'></div>
    </div>
    <Categories categories={categories} filterItems={filterItems} />
    
    {/* <Menu items={menuItems} /> */}
    <div className='section-center'>
     
        {itemes.map((data,index)=>{

        
        return <article key={data.id} className='menu-item'>
          <img src={data.image} alt={data.name} className='photo' />
          <div className='item-info '>
        
              <h4 className="text-red-900 font-bold text-xl">{data.name}</h4>
              <h4 className='price text-red-900'>${data.price}</h4>
            
            <p className='item-text text-red-900 font-bold'>{data.description}</p>
          </div>
        </article>
      })}
   
    </div>
  </section>
  </div>
);
}

export default Menu;