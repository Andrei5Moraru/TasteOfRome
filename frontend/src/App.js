import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import HomePage from "./components/HomePage";
import Book from "./components/Book";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "tailwindcss/tailwind.css";
import RegistrationPage from './components/RegistrationPage';
import Login from './components/Login';
import Menu from './components/Menu';
import Delivery from './components/Delivery';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout';
import Thankyou from './components/Thankyou';
import Profile from './components/Profile';
import ThankYouOrder from './components/ThankYouOrder';

function App() {


  return (
    <BrowserRouter>
      <div className="">

        <div>
          <Navbar />
          <Cart />
          <Route exact path='/' render={(props) => <HomePage {...props} />} />
          <Route exact path='/register' render={(props) => <RegistrationPage {...props} />} />
          <Route exact path='/login' render={(props) => <Login {...props} />} />
          <Route path='/menu' render={(props) => <Menu {...props} />} />
          <Route path='/book' render={(props) => <Book {...props} />} />
          <Route path='/delivery' render={(props) => <Delivery {...props} />} />
          <Route path='/checkout' render={(props) => <Checkout {...props} />} />
          <Route path='/thankyou' render={(props) => <Thankyou {...props} />} />
          <Route path='/thankyouorder' render={(props) => <ThankYouOrder {...props} />} />
          <Route path='/profile' render={(props) => <Profile {...props} />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );

};
export default App;
