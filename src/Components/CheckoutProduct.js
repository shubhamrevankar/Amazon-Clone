import React, { useEffect } from 'react'
import "../CSS-Files/CheckoutProduct.css"
import { Button } from 'react-bootstrap'
import { useStateValue } from '../StateProvider';

function CheckoutProduct(props) {

  const [{basket}, dispatch] = useStateValue();

  // useEffect(() => {
  //   console.log("Checkout -> ")
  //   console.log(props.)
  // },[basket])


  function removeFromBasket(){
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      item: {
        id: props.product.id
      }
    })
  }

  function increment() {
    console.log("increment");
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.product.id,
        title: props.product.name,
        img: props.product.img,
        price: props.product.price,
        rating: props.product.rating,
        count: props.product.count
      }
    })
  }

  function decrement() {
    console.log("decrement");

    props.product.count > 1 ?
    dispatch({
      type: 'REMOVE_ONE_FROM_BASKET',
      item: {
        id: props.product.id,
        title: props.product.name,
        img: props.product.img,
        price: props.product.price,
        rating: props.product.rating,
        count: props.product.count
      }
    })
    :
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
        <div className='counter'>
          <button onClick={decrement} className='product_count'><p  className='product_count_m' >-</p></button>
          <p className='count'>{props.product.count}</p>
          <button onClick={increment} className='product_count'><p  className='product_count_p' >+</p></button>
        </div>
        <Button onClick={removeFromBasket} variant="danger">Remove from Basket</Button>
      </div>
    </div>
  )
}

export default CheckoutProduct
