import { NavLink } from 'react-router-dom';
import React, { Fragment } from 'react';
import CartContext from './cart/CartContext';
import { useContext } from "react";
import logo from "../images/pizza-slice_logo.png";
import { FIRSTNAME_ATOM } from '../util/UserContext';
import { useAtom } from 'jotai';


const Navbar = () => {
    const { cartItems, showHideCart } = useContext(CartContext);
    const [firstName, setFirstName] = useAtom(FIRSTNAME_ATOM);

    return (


        <nav className="nav">
            <div className="c px-12 mx-auto py-5">
                <div className="flex justify-between">
                    <div className="flex items-center ">

                        <div className="logo">

                            <NavLink to='/'> <a href><img className="logo" src={logo} alt="" width="70" /></a> </NavLink>

                        </div>
                        <div className="logo ml-6">
                            <NavLink to='/'> Taste of Rome</NavLink>
                        </div>
                    </div>

                    <ul className="flex space-x-6 items-center ">
                        <li> <NavLink to='/menu' exact activeStyle={{ color: 'white' }}>Menu</NavLink></li>
                        <li> <NavLink to='/book' exact activeStyle={{ color: 'white' }}>Reservations</NavLink></li>
                        <li> <NavLink to='/delivery' exact activeStyle={{ color: 'white' }}>Home delivery</NavLink></li>
                        <div className="cart__icon">
                            <i
                                className='fa fa-shopping-cart fa-lg'
                                aria-hidden='true' styles="font-size:48px;color:red"
                                onClick={showHideCart}

                            />
                            {cartItems.length > 0 && (
                                <div className='item__count bg-white'>
                                    <span>{cartItems.length}</span>
                                </div>
                            )}
                        </div>
                        {firstName ?
                        <Fragment>
                            <li><NavLink to="/">Welcome, {firstName}</NavLink></li>
                            <li><button class="fas fa-sign-out-alt" onClick={()=>setFirstName(null)}>Logout</button></li>
                            </Fragment>
                            : <Fragment>
                                <li> <NavLink to='/register' exact activeStyle={{ color: 'white' }}>Sign Up</NavLink></li>
                                <li> <NavLink to='/login' exact activeStyle={{ color: 'white' }}>Login</NavLink></li>
                            </Fragment>}

                    </ul>

                </div>
            </div>

        </nav>



    );
}

export default Navbar;