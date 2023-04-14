import React, { useEffect } from "react";
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Components/HomePage";
// import Header from "./Header";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Address from "./Components/Address"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {

  const [{ user,basket }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){

        dispatch({
          type: "SET_USER",
          user: authUser
        });

      } else {

        dispatch({
          type: "SET_USER",
          user: null
        });

      }
    });

    return () => {
      unsubscribe();
    }

  },[])


  useEffect(() => {
    console.log(user?._delegate.uid);
    if(user){
      const userData = JSON.stringify(basket)
      localStorage.setItem(user?._delegate.uid,userData);
    }
  },[basket]);

  useEffect(() => {
    dispatch({
      type: "SET_BASKET",
      basket: JSON.parse(localStorage.getItem(user?._delegate.uid))
    });
  },[user]);




  



  return (
    <div className="app" >
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/login' element={<Login />} />
            <Route path='/address' element={<Address />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
