// rfce === boilerplate
import React from 'react'
import './Header.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Header() {
  return (
    <nav className='header'>
        <Link className="link" to="/">
            <img src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg'/>
        </Link>
        <div className='nav--address'>
            <img src='https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-vector-location-icon-png-image_1028445.jpg' className='nav--location--logo'/>
            <div className='nav--address--block'>
                <p>Hello</p>
                <h4>Select your address</h4>
            </div>
        </div>
        <div className='nav--search'>
            {/* dropdown menu of categories should be added */}
            <input placeholder='Search Amazon.in' className='nav--searchbox'/>
            <img src='https://cdn-icons-png.flaticon.com/512/3917/3917132.png' className='nav--searchicon' />
        </div>
        <div className='nav--linkbar'>
            {/* dropdown menu of country should be added */}
            <Link to="/login" className='nav--linkbar--login'>
                <div>
                    <p>Hello</p>
                    <h4>Sign in</h4>
                </div>
            </Link>
            <Link to="/login" className='nav--linkbar--orders'>
                <div>
                    <p>Returns</p>
                    <h4>& Orders</h4>
                </div>
            </Link>
            <Link to="/checkout" className='nav--cart'>
                <img src="https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-11640441682ecem2ohejv.png" />
                <span>0</span>
            </Link>
        </div>
    </nav>
  )
}

export default Header
