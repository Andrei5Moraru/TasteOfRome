import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";
import formatCurrency from "format-currency";
import CartContext from "./cart/CartContext";
import Categories from "./Category";
import { FIRSTNAME_ATOM } from '../util/UserContext';
import { useAtom } from 'jotai';
import { Redirect } from 'react-router';

const Delivery = (props) => {

    const [menu, setMenu] = useState([]);
    const [menuCopy, setMenuCopy] = useState([]);
    const [firstName] = useAtom(FIRSTNAME_ATOM);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios("http://localhost:8080/api/v1/menu")
            const data = response.data;
            setMenu(data);
            setMenuCopy(data);

        }
        fetchItems()
    }, [])

    const { addToCart } = useContext(CartContext);
    let opts = { format: "%s%v", symbol: "RON" };


    const filterItems = (category) => {
        console.log(category)
        if (category === 'all') {
            setMenuCopy(menu)
            return
        }
        const newItems = menu.filter((menu) => menu.category === category)
        setMenuCopy(newItems)
        console.log(newItems)
    }



    return (
        <div>
            {!firstName ?
                <Redirect to="/login"></Redirect> :
                <div className="xl:bg-cover bg-white bg-opacity-70 pb-20 ">

                    <div className="font-semibold font-mono text-6xl sm:text-8xl  flex justify-center leading-none dark:text-white text-red-900 p-16 "> Home delivery</div>
                    <div className="flex justify-center mb-6 mt-16 mr-96 ml-96  rounded-full p-4">

                        <Categories filterItems={filterItems} />
                    </div>

                    <div className=" sm:flex flex-wrap justify-center items-center text-center gap-12 ">

                        {menuCopy.map((data, index) => {

                            return <article className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800" key={data.id} >
                                <img src={data.image} alt={data.name} className='photo' />
                                <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                                    {data.name}
                                </h3>
                                <p className="text-2xl  text-white dark:text-gray-300 py-4">
                                    {data.description}
                                </p>
                                <div className="flex justify-between">
                                    <span className="bg-white rounded-full text-red-800 text-xl font-bold px-3 py-2 leading-none flex items-center">
                                        {formatCurrency(`${data.price}`, opts)}
                                    </span>
                                    <button type="button" className="bg-white rounded-full text-red-800 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center " onClick={() => addToCart(data)}>
                                        Add to cart
                                    </button>
                                </div>
                            </article>

                        })}




                    </div>



                    {/* <div className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800">
            
            <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                Pizza
            </h3>
            <p className="text-2xl  text-white dark:text-gray-300 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="flex justify-between">
            <span className="bg-white rounded-full text-yellow-500 text-xl font-bold px-3 py-2 leading-none flex items-center">
                            $36.00               
                        </span>
            <button type="button" className="bg-white rounded-full text-yellow-500 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center">
                         Add to cart
                        </button> 
                        </div>           
        </div>
        <div className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800">
            
            <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                Pizza
            </h3>
            <p className="text-2xl  text-white dark:text-gray-300 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="flex justify-between">
            <span className="bg-white rounded-full text-yellow-500 text-xl font-bold px-3 py-2 leading-none flex items-center">
                            $36.00               
                        </span>
            <button type="button" className="bg-white rounded-full text-yellow-500 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center">
                         Add to cart
                        </button> 
                        </div>           
        </div>
        <div className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800">
            
            <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                Pizza
            </h3>
            <p className="text-2xl  text-white dark:text-gray-300 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="flex justify-between">
            <span className="bg-white rounded-full text-yellow-500 text-xl font-bold px-3 py-2 leading-none flex items-center">
                            $36.00               
                        </span>
            <button type="button" className="bg-white rounded-full text-yellow-500 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center">
                         Add to cart
                        </button> 
                        </div>           
        </div>
        <div className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800">
            
            <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                Pizza
            </h3>
            <p className="text-2xl  text-white dark:text-gray-300 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="flex justify-between">
            <span className="bg-white rounded-full text-yellow-500 text-xl font-bold px-3 py-2 leading-none flex items-center">
                            $36.00               
                        </span>
            <button type="button" className="bg-white rounded-full text-yellow-500 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center">
                         Add to cart
                        </button> 
                        </div>           
        </div>
        <div className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800">
            
            <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                Pizza
            </h3>
            <p className="text-2xl  text-white dark:text-gray-300 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="flex justify-between">
            <span className="bg-white rounded-full text-yellow-500 text-xl font-bold px-3 py-2 leading-none flex items-center">
                            $36.00               
                        </span>
            <button type="button" className="bg-white rounded-full text-yellow-500 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center">
                         Add to cart
                        </button> 
                        </div>           
        </div>
        <div className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800">
            
            <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                Pizza
            </h3>
            <p className="text-2xl  text-white dark:text-gray-300 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="flex justify-between">
            <span className="bg-white rounded-full text-yellow-500 text-xl font-bold px-3 py-2 leading-none flex items-center">
                            $36.00               
                        </span>
            <button type="button" className="bg-white rounded-full text-yellow-500 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center">
                         Add to cart
                        </button> 
                        </div>           
        </div>
        <div className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800">
            
            <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                Pizza
            </h3>
            <p className="text-2xl  text-white dark:text-gray-300 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="flex justify-between">
            <span className="bg-white rounded-full text-yellow-500 text-xl font-bold px-3 py-2 leading-none flex items-center">
                            $36.00               
                        </span>
            <button type="button" className="bg-white rounded-full text-yellow-500 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center">
                         Add to cart
                        </button> 
                        </div>           
        </div>
        <div className="pizza w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 border-4 border-red-900 shadow-lg rounded-lg dark:bg-gray-800">
            
            <h3 className="text-4xl  text-white font-semibold dark:text-white py-4">
                Pizza
            </h3>
            <p className="text-2xl  text-white dark:text-gray-300 py-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <div className="flex justify-between">
            <span className="bg-white rounded-full text-yellow-500 text-xl font-bold px-3 py-2 leading-none flex items-center">
                            $36.00               
                        </span>
            <button type="button" className="bg-white rounded-full text-yellow-500 text-xl hover:bg-yellow-100 font-bold px-3 py-2 leading-none flex items-center">
                         Add to cart
                        </button> 
                        </div>           
        </div> */}



                </div>
            }
        </div>

    );
}

export default Delivery;