import React from 'react'
import Header from './Header'
import Home from './Home'
import "../CSS-Files/HomePage.css"
import Footer from './Footer'

function HomePage() {
  return (
    <div className='homePage'>
        <Header />
        <Home />
        <Footer />
    </div>
  )
}

export default HomePage
