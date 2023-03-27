import React from 'react'
import { Button } from 'react-bootstrap'
import "../CSS-Files/Product.css"
import { useStateValue } from '../StateProvider'


function Product(props) {

  const [ { basket } , dispatch] = useStateValue();

  function addToBasket(){

    //Add item to basket
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: props.product.id,
        title: props.product.title?props.product.title:"",
        img: props.product.image?props.product.image:"",
        price: props.product.price?props.product.price:"",
        rating: Math.round(props.product.rating.rate?props.product.rating.rate:2),
        count: 1
      }
    })
  }

  return (
    <div className='product'>
      <p>{props.product.title?props.product.title:""}</p>
      <div className='price_rating'>
          <p>₹{props.product.price?props.product.price:0}</p>
          {
              Array(Math.round(props.product.rating.rate?props.product.rating.rate:0)).fill().map(() => (<span>⭐</span>))
          }
      </div>
      <div className='body'>
        <img src={props.product.image?props.product.image:""}/>
        <Button onClick={addToBasket}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default Product
