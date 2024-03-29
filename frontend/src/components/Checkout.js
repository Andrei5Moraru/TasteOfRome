import React, { useContext } from "react";
import { useHistory } from 'react-router';
import CartContext from "./cart/CartContext";
import CartItem from "./cart/CartItem";
import { sumItems } from "./cart/CartReducer";
import axios from 'axios';

const Checkout = () => {


    const history = useHistory();
    const { cartItems, removeAll } = useContext(CartContext);
    // console.log(cartItems[0].name)
    let orders = {};
    const total = sumItems(cartItems).total;
    orders = Object.assign(orders, cartItems);
    // const orders = cartItems[0];
    const handleCheckout = async () => {
        await axios.post("http://localhost:8080/api/v1/order", {
            orders,
            total
        });
        history.push("/thankyouorder");
    }


    return (
        <div className="mb-44 mt-16 ml-44 mr-44 rounded ">

            <div className='mr-36 ml-36  bg-white border-black border-2'>
                <h1 className="text-center font-bold text-xl uppercase pt-16 "> Checkout</h1>
                <ul className="ml-52 mr-auto mt-16 flex ">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
            </div>
            <div className='Cart__cartTotal flex  font-bold text-4xl bg-white mr-36 ml-36 pt-6'>
                <div className="ml-auto mr-auto mb-36 ">Cart Total</div>

                <div className="ml-auto mr-auto" style={{ marginLeft: 5 }}>
                    {sumItems(cartItems).total}RON
                </div>
            </div>
            <div >
                <div className="bg-white shadow-lg p-5 text-gray-700 ml-36 mr-36">
                    <div className="w-full pt-1 pb-5">
                        <div className="bg-red-900 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                            <i className="mdi mdi-credit-card-outline text-3xl"></i>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h1 className="text-center font-bold text-xl uppercase"> Payment</h1>
                    </div>
                    <div className="mb-3 flex -mx-2">
                        <div className="px-2">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" />
                                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" alt='' className="h-8 ml-3" />
                            </label>
                        </div>
                        <div className="px-2">
                            <label className="flex items-center cursor-pointer">
                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" alt='' className="h-8 ml-3" />
                            </label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                        <div>
                            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                        <div>
                            <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                        </div>
                    </div>
                    <div className="mb-3 -mx-2 flex items-end">
                        <div className="px-2 w-1/2">
                            <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                            <div>
                                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                    <option value="01">01 - January</option>
                                    <option value="02">02 - February</option>
                                    <option value="03">03 - March</option>
                                    <option value="04">04 - April</option>
                                    <option value="05">05 - May</option>
                                    <option value="06">06 - June</option>
                                    <option value="07">07 - July</option>
                                    <option value="08">08 - August</option>
                                    <option value="09">09 - September</option>
                                    <option value="10">10 - October</option>
                                    <option value="11">11 - November</option>
                                    <option value="12">12 - December</option>
                                </select>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-10">
                        <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                        <div>
                            <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                        </div>
                    </div>
                    <div>
                        <button className="block w-full max-w-xs mx-auto bg-red-900 hover:bg-red-800 focus:bg-red-800 text-white rounded-lg px-3 py-3 font-semibold" onClick={() => { handleCheckout(); removeAll(); }}><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Checkout;