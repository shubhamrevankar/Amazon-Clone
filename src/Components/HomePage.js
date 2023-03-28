import React, { useState } from 'react'
import Header from './Header'
import Home from './Home'
import "../CSS-Files/HomePage.css"
import Footer from './Footer'

function HomePage() {

  const [ category, setCategory ] = useState("ALL");

  function setCategoryFun(cat){
      console.log(cat);
      setCategory(cat);
  }

  return (
    <div className='homePage'>
        <Header category={category} setCategory={setCategoryFun}/>
        <Home category={category}/>
        <Footer />
    </div>
  )
}

export default HomePage
