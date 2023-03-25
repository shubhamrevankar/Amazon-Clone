import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./HomePage";
// import Header from "./Header";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
