import { Link } from 'react-router-dom';
import React, { Component } from 'react';


class HomePage extends Component {


	render() {
		return (
			<div>



				<div className="home">
					<div className="dark:bg-red-800 overflow-hidden">
						<div className="container mx-96 px-6  py-96 ">
							<div className="c p-10 mt-8 rounded-lg " >

								<h1 className="font-semibold uppercase text-6xl sm:text-8xl mr-auto ml-auto flex flex-col leading-none dark:text-white text-white">
									Probably
									<span
										className="text-5xl sm:text-7xl z-30">
										The best food in town
									</span>
								</h1>

								<div className="flex mt-8">

									<Link to={"/book"} className="font-bold hover:underline uppercase py-2 px-16 rounded-lg bg-white border-2 border-black text-red-900 dark:text-white hover:bg-yellow text-md">
										BOOK A TABLE
									</Link>

								</div>
							</div>
						</div>
					</div>
				</div>


				{/* <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
			
			
			<div class="carousel relative rounded relative overflow-hidden shadow-xl">
			  <div class="carousel-inner relative overflow-hidden w-full">
				
				<input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden=""
				  checked="checked"/>
				<div class="ceva carousel-item absolute opacity-0 bg-center" >
				
				</div>
				<label for="carousel-3"
				  class="control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto flex justify-center content-center"><i
					class="fas fa-angle-left mt-3"></i></label>
				<label for="carousel-2"
				  class="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
					class="fas fa-angle-right mt-3"></i></label>
			
			
				<input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
				<div class="ceva carousel-item absolute opacity-0 bg-center" >
				</div>
				<label for="carousel-1"
				  class=" control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
					class="fas fa-angle-left mt-3"></i></label>
				<label for="carousel-3"
				  class="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
					class="fas fa-angle-right mt-3"></i></label>
			
				
				<input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
				<div class="ceva carousel-item absolute opacity-0">
				</div>
				<label for="carousel-2"
				  class="control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"><i
					class="fas fa-angle-left mt-3"></i></label>
				<label for="carousel-1"
				  class="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"><i
					class="fas fa-angle-right mt-3"></i></label>
			
				
				<ol class="carousel-indicators">
				  <li class="inline-block mr-3">
					<label for="carousel-1"
					  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
				  </li>
				  <li class="inline-block mr-3">
					<label for="carousel-2"
					  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
				  </li>
				  <li class="inline-block mr-3">
					<label for="carousel-3"
					  class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
				  </li>
				</ol>
			
			  </div>
			</div> */}


			</div>
		);
	}
}

export default HomePage;