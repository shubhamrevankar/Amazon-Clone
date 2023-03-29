// rfce === boilerplate
import React,{ useState } from 'react'
import '../CSS-Files/Header.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { getTotalItems } from '../reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownCategories from './DropdownCategories'



function Header() {

    const [{ basket,user,search },dispatch] = useStateValue();


    function scrollToTop(){
    
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    
    }

    const [currentSearch,setCurrentSearch] = useState("")

    function handleChange(action){
        // console.log(action);
        // console.log(action.target.value);
        setCurrentSearch(action.target.value);
    }

    function handleKeyDown(action){
        if(action.key === "Enter"){
            handleClickSearch();
        }
    }

    function handleClickSearch(){
        dispatch({
            type: 'SET_SEARCH',
            search: currentSearch
        })
        setCurrentSearch(currentSearch);
    }

    function handleReset(){
        dispatch({
            type: 'SET_SEARCH',
            search: ""
        })
        dispatch({
            type: 'SET_CATEGORY',
            category: "ALL"
        })
        setCurrentSearch("");
        scrollToTop();
    }

    
    // console.log(basket);

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }

    // console.log(`the value of search is ${search}`)

  return (
    <nav className='header'>
        <Link className="link" to="/" onClick={handleReset}>
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
            <div>
                <DropdownCategories/>
            </div>
            <input 
                placeholder='Search Amazon.in'
                className='nav--searchbox'
                value={currentSearch}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <Link to="/">
                <img 
                src='https://cdn-icons-png.flaticon.com/512/3917/3917132.png'
                className='nav--searchicon'
                onClick={handleClickSearch}
                />
            </Link>
        </div>
        <div className='nav--linkbar'>
            {/* dropdown menu of country should be added */}
            <Link to={!user && "/login"} className='nav--linkbar--login'>
                <div onClick={login}>
                    <p>Hello {user?.email}</p>
                    <h4>{user ? "Sign Out" : "Sign In"}</h4>
                </div>
            </Link>
            <Link to="/login" className='nav--linkbar--orders'>
                <div>
                    <p>Returns</p>
                    <h4>& Orders</h4>
                </div>
            </Link>
            <Link to="/checkout" className='nav--cart' onClick={scrollToTop}>
                <img src="https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-11640441682ecem2ohejv.png" />
                <span>{getTotalItems(basket)}</span>
            </Link>
        </div>
    </nav>
  )
}

export default Header
