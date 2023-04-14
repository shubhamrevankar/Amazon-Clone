// rfce === boilerplate
import React,{ useEffect, useState } from 'react'
import '../CSS-Files/Header.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { getTotalItems } from '../reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownCategories from './DropdownCategories'
import { Col, Container, Nav, NavLink, Navbar, NavbarBrand, Row } from 'react-bootstrap';



function Header() {

    const [{ basket,user,search,address },dispatch] = useStateValue();


    function scrollToTop(){
    
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    
    }



    const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
    		const updateDimension = () => {
      			setScreenSize(getCurrentDimension())
    		}
    		window.addEventListener('resize', updateDimension);
    
		
    		return(() => {
        		window.removeEventListener('resize', updateDimension);
    		})
  	}, [screenSize])





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
    // <nav className='header navbar fixed-top'>
    //     <div className="container-fluid">
            
            // <Link className="link" to="/" onClick={handleReset}>
            //     <img src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg'/>
            // </Link>
    //         <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>
    //             <span className="icon-bar"></span>                        
    //         </button>
    //         <div class="collapse navbar-collapse" id="myNavbar">
                // <Link to="/address" className='nav--address--link'>
                //     <div className='nav--address'>
                //         <img src='https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-vector-location-icon-png-image_1028445.jpg' className='nav--location--logo'/>
                //         <div className='nav--address--block'>
                //             <p>Hello</p>
                //             <h4>{address===""?"Select Your Address":address}</h4>
                //         </div>
                //     </div>
                // </Link>
                // <div className='nav--search'>
                //     <div>
                //         <DropdownCategories/>
                //     </div>
                //     <input 
                //         placeholder='Search Amazon.in'
                //         className='nav--searchbox'
                //         value={currentSearch}
                //         onChange={handleChange}
                //         onKeyDown={handleKeyDown}
                //     />
                //     <Link to="/">
                        // <img 
                        // src='https://cdn-icons-png.flaticon.com/512/3917/3917132.png'
                        // className='nav--searchicon'
                        // onClick={handleClickSearch}
                        // />
                //     </Link>
                // </div>
    //             <div className='nav--linkbar'>
    //                 {/* dropdown menu of country should be added */}
                    // <Link to={!user && "/login"} className='nav--linkbar--login'>
                    //     <div onClick={login}>
                    //         <p>Hello {user?.email}</p>
                    //         <h4>{user ? "Sign Out" : "Sign In"}</h4>
                    //     </div>
                    // </Link>
                    // <Link to="/login" className='nav--linkbar--orders'>
                    //     <div>
                    //         <p>Returns</p>
                    //         <h4>& Orders</h4>
                    //     </div>
                    // </Link>
                    // <Link to="/checkout" className='nav--cart' onClick={scrollToTop}>
                    //     <img src="https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-11640441682ecem2ohejv.png" />
                    //     <span>{getTotalItems(basket)}</span>
                    // </Link>
    //             </div>
    //         </div>
    //     </div>
    // </nav>
    <>
    {/* <Container>
        <Row>
            <Col> */}
            <div className='sticky'>
                <Navbar className='center' bg='dark' expand='md'>
                    <Container className={`flex center ${screenSize.width>=768 ? "height50" : ""}`}>
                        <Navbar.Brand>
                            <Link className="link" to="/" onClick={handleReset}>
                                    {
                                        screenSize.width>=768?
                                        <img className="logo_large" src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg'/>
                                        :
                                        <img className="logo_small" src='https://companieslogo.com/img/orig/AMZN.D-13fddc58.png?t=1632523695'/>
                                    }
                                
                            </Link>
                        </Navbar.Brand>

                            {
                                screenSize.width>=768 && 

                                <Nav.Link>
                                    <Link to="/address" className='nav--address--link'>
                                        <div className='nav--address'>
                                            <img src='https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-vector-location-icon-png-image_1028445.jpg' className='nav--location--logo'/>
                                            <div className='nav--address--block'>
                                                <p>Hello</p>
                                                <h4>{address===""?"Select Your Address":address}</h4>
                                            </div>
                                        </div>
                                    </Link>
                                </Nav.Link>

                            }
                        
                        
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
                            
                        <Navbar.Toggle aria-controls='nav'/>

                        <Navbar.Collapse>


                            
                            <Nav>
                                {
                                    screenSize.width<768 && 

                                    <Nav.Link>
                                        <Link to="/address" className='nav--address--link'>
                                            <div className='nav--address'>
                                                {screenSize.width>=768 && <img src='https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-vector-location-icon-png-image_1028445.jpg' className='nav--location--logo'/>}
                                                <div className='nav--address--block'>
                                                    {screenSize.width>=768 && <p>Hello </p>}
                                                    <h4>{address===""?"Select Your Address":address}</h4>
                                                </div>
                                            </div>
                                        </Link>
                                    </Nav.Link>

                                }
                                <Nav.Link>
                                <Link to={!user && "/login"} className='nav--linkbar--login'>
                                    <div onClick={login}>
                                        {screenSize.width>=768 && <p>Hello {user?.email}</p>}
                                        <h4>{user ? "Sign Out" : "Sign In"}</h4>
                                    </div>
                                </Link>
                                </Nav.Link>
                                <Nav.Link>
                                <Link to="/checkout" className='nav--cart' onClick={scrollToTop}>
                                    {screenSize.width>=768 ? <img src="https://www.citypng.com/public/uploads/preview/hd-shopping-cart-white-logo-icon-transparent-png-11640441682ecem2ohejv.png" /> : <h6>Your Cart : <span>{getTotalItems(basket)}</span></h6> }
                                    {screenSize.width>=768 && <span>{getTotalItems(basket)}</span>}
                                </Link>
                                </Nav.Link>
                            </Nav>



                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            {/* </Col>
        </Row>
    </Container> */}
            <div className='height50'></div>
    
    </>
  )
}

export default Header
