import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Components/HomePage";
// import Header from "./Header";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {

  const [{ user }, dispatch] = useStateValue();

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

  console.log(user);



  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
