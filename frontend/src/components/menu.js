import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Categories from './categoryMenu';

function Menu () {
   const [menu, setMenu] = useState([]);
   const [menuCopy, setMenuCopy] = useState([]);

    useEffect(()=>{
        const fetchItems = async()=>{
            const response = await axios("http://localhost:8080/api/v1/menu")
            const data = response.data;
            setMenu(data);
            setMenuCopy(data);
            
        }
        fetchItems()
    },[])
    
    const itemes = menu
    const filterItems = (category) => {
        if (category === 'all') {
            setMenuCopy(itemes)
            return
            }
    const newItems = itemes.filter((itemes) => itemes.category === category)
    setMenuCopy(newItems)
  }


return ( 
    <div className="bg-contain bg-white bg-opacity-70 ">
    <section className='menu section'>
    <div className='title'>
      <h2>our menu</h2>
      <div className='underline'></div>
    </div>
    <Categories filterItems={filterItems} />
    
    {/* <Menu items={menuItems} /> */}
    <div className='section-center'>
     
        {menuCopy.map((data,index)=>{

        
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