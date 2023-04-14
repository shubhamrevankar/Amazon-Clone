import React, { useEffect } from 'react'
import Header from './Header'
import "../CSS-Files/Checkout.css"
import { useStateValue } from '../StateProvider';
import Product from './Product';
import CheckoutProduct from './CheckoutProduct';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal,getTotalItems } from '../reducer';
import { useState } from 'react';

function Checkout() {


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







    const [{ basket }] = useStateValue();

    return (
    <>
        <Header />
        <div className={`checkout ${screenSize.width>=860?"":"padr0"}`}>
            <div className={`shopping_cart ${screenSize.width>=860?"":"padt250"}`}>
                <h1>Shopping Cart</h1>
                <hr />
                {
                    (!basket || basket.length===0)? 
                    <div className='cart_empty'><p>Your Cart is empty</p><Link className="root_link" to="/" >Click Here</Link> to Add</div>
                    :
                    <div>
                    {
                        basket?.map(prod => 
                        (
                            <div>
                            <CheckoutProduct product={prod} />
                            </div>
                        )
                        )
                }
                </div>}
            </div>
            <div className={`checkout_products ${screenSize.width>=860?"":"height160 left10"}`}>
                {screenSize.width>=860 && <div><img src="https://www.citypng.com/public/uploads/preview/-31622652101fnmwrcny0a.png" />
                <div><p style={{color:'#067D62'}}>Your order is eligible for FREE Delivery.</p>
                <p>Select this option at checkout. Details</p></div></div>}
                
                <div>
                <p className='subtotal'>Subtotal ({getTotalItems(basket)} item): </p>
                <CurrencyFormat
                    renderText={(value) => (
                    <>
                        <p className='subtotal_currency'>
                        {/* Part of the homework */}
                        <strong>{value}</strong>
                        </p>
                    </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)} // Part of the homework
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}
                /></div>


                {screenSize.width>=860 && <div><input id="check" type="checkbox" />
                <label for="check">This order contains a gift</label></div>}
                
                <Button type="button" class="btn btn-warning">Proceed to Buy</Button>
            </div>
        </div>
    </>
    )
}

export default Checkout
