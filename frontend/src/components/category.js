
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = ({ filterItems }) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios("http://localhost:8080/api/v1/menu")
      const data = response.data;
      setMenu(data);

    }
    fetchItems()
  }, [])
  const allCategories = ['all', ...new Set(menu.map(menu => menu.category))];

  // const [categories, setCategories] = useState(allCategories)

  return <div className='btn-container'>
    {allCategories.map((category, index) => {
      return <button
        type="button" className="bg-white rounded-full text-red-800 text-3xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center mr-6 "
        key={index}
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    })}
  </div>;
};

export default Categories;