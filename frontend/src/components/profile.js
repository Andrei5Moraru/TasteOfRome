import React from 'react';

const Profile = () => {
    return (
        <div className="profile-page">

            <div className=" py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mb-36 ">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12">
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    Andrei Moraru
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Bucharest, Romania
                                </div>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                                    <i className="mr-2 text-lg text-blueGray-400"></i>
                                    andrei5moraru24@gmail.com
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            Order History
                                        </h3>
                                        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mb-6">

                                            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                                                <span>Order #1 </span>

                                            </div>
                                            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </span>

                                            </div>
                                            <div className="bg-red-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                                                <span>Price 80RON</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mb-6">

                                            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                                                <span>Order #2 </span>

                                            </div>
                                            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </span>

                                            </div>
                                            <div className="bg-red-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                                                <span>Price 60RON</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 mb-6">

                                            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                                                <span>Order #3 </span>

                                            </div>
                                            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </span>

                                            </div>
                                            <div className="bg-red-900 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                                                <span>Price 100RON</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Profile;