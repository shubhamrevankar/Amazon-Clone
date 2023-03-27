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
        title: props.product.name,
        img: props.product.img,
        price: props.product.price,
        rating: props.product.rating,
        count: 1
      }
    })
  }

  return (
    <div className='product'>
      <p>{props.product.name}</p>
      <div className='price_rating'>
          <p>₹{props.product.price}</p>
          {
              Array(props.product.rating).fill().map(() => (<span>⭐</span>))
          }
      </div>
      <div className='body'>
        <img src={props.product.img}/>
        <Button onClick={addToBasket}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default Product
