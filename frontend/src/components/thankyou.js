import { NavLink} from 'react-router-dom';
import React, { Component } from 'react';


class HomePage extends Component {


	render() {
		return ( 
            <div class="flex flex-col mt-56 mb-96 ml-36  mr-36">
			<div class="grid place-items-center w-4/5 mx-auto p-10 my-20 sm:my-auto bg-white border-4 border-red-900 bg-opacity-70 rounded-xl shadow-2xl space-y-5 text-center cursor-pointer">
      
        
				<h1 class="text-4xl font-bold uppercase text-red-900 transition duration-500">Thank you</h1>
        <h2 class="text-xl text-gray-700 transition duration-500">Your booking has been saved </h2>
        <NavLink to='/menu'  className="p-2 pl-6 pr-6 flex justify-center mr-auto ml-auto bg-red-900 text-yellow-100 rounded"> Return to Menu</NavLink>
			</div>
		</div>
		);
	}
}

export default HomePage;