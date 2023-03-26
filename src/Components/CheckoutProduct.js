import React from 'react'
import "../CSS-Files/CheckoutProduct.css"
import { Button } from 'react-bootstrap'
import { useStateValue } from '../StateProvider';

function CheckoutProduct(props) {

  const [{basket}, dispatch] = useStateValue();


  function removeFromBasket(){
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: {
        id: props.product.id
      }
    })
  }

  return (
    <div className='checkout_product'>
      <img src={props.product.img} />
      <div className='cart_item_discription'>
        <p>{props.product.title}</p>
        <div>
        <p>₹{props.product.price}</p>
        {
            Array(props.product.rating).fill().map(() => (<span>⭐</span>))
        }</div>
        <Button onClick={removeFromBasket} variant="danger">Remove from Basket</Button>
      </div>
    </div>
  )
}

export default CheckoutProduct
