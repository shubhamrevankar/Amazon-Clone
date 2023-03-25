import React from 'react'
import { Button } from 'react-bootstrap'
import "./Product.css"

function Product(props) {
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
        <Button>Add to Cart</Button>
      </div>
    </div>
  )
}

export default Product
