import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import HomePage from "./components/HomePage";
import Book from "./components/book";
// import ThankYou from "./components/thankYou";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import "tailwindcss/tailwind.css";
import RegistrationPage from './components/RegistrationPage';
import Login from './components/Login';
import Menu from './components/menu';
import Delivery from './components/delivery';
import Shopping from './components/shopping';
import Cart from './components/cart/Cart';
import Checkout from'./components/Checkout';
import Thankyou from './components/thankyou';

function App() {


  return (
    <BrowserRouter>
      <div className="">

        <div>
          <Navbar />
          <Cart/>
          <Route exact path='/' render={(props) => <HomePage {...props} />} />
          <Route exact path='/register' render={(props) => <RegistrationPage {...props} />} />
          <Route exact path='/login' render={(props) => <Login {...props} />} />
          <Route exact path='/menu' render={(props) => <Menu {...props} />} />
          <Route exact path='/book' render={(props) => <Book {...props} />} />
          <Route exact path='/delivery' render={(props) => <Delivery {...props} />} />
          <Route exact path='/shopping' render={(props) => <Shopping {...props} />} />
          <Route exact path='/checkout' render={(props) => <Checkout {...props} />} />
          <Route exact path='/thankyou' render={(props) => <Thankyou {...props} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );

};
export default App;
