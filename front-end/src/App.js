import React, { useState } from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer/Footer';

function App() {
  const isLoggedIn = true;
  const [username, setUsername] = useState('');
  return (
    <React.Fragment>
      <Navbar username={username} isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/signup" render={() => <Signup setUsername={setUsername} />} />
        <Route path="/login" component={Login} setUsername={setUsername} />
        <Route component={Default} />
      </Switch>
      <Footer/>
      <Modal />
    </React.Fragment>
  );
}

export default App;
