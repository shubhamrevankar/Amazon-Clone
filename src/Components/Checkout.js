import React from 'react'
import Header from './Header'
import "../CSS-Files/Checkout.css"
import { useStateValue } from '../StateProvider';
import Product from './Product';
import CheckoutProduct from './CheckoutProduct';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
    <>
        <Header />
        <div className='checkout'>
            <div className='shopping_cart'>
                <h1>Shopping Cart</h1>
                <hr />
                {
                    basket?.length===0? 
                    <div className='cart_empty'><p>Your Cart is empty</p><Link className="root_link" to="/" >Click Here</Link> to Add</div>
                    :
                    <div>
                    {
                        basket.map(prod => 
                        (
                            <div>
                            <CheckoutProduct product={prod} />
                            </div>
                        )
                        )
                }
                </div>}
            </div>
            <div className='checkout_products'>
                <div><img src="https://www.citypng.com/public/uploads/preview/-31622652101fnmwrcny0a.png" />
                <div><p style={{color:'#067D62'}}>Your order is eligible for FREE Delivery.</p>
                <p>Select this option at checkout. Details</p></div></div>
                
                <div>
                <p className='subtotal'>Subtotal ({basket.length} item): </p>
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


                <div><input id="check" type="checkbox" />
                <label for="check">This order contains a gift</label></div>
                
                <Button type="button" class="btn btn-warning">Proceed to Buy</Button>
            </div>
        </div>
    </>
    )
}

export default Checkout
