import React from 'react'
import "./Home.css"
import Product from './Product'
import productPropsArray from './productPropsArray';

function Home() {
  return (
    <div className='home'>
        <img src='https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg' className='backgroung_img'/>
        <div class="row product_container">
          {
            productPropsArray.map(productProps => 
              (
                <div class="col">
                  <Product product={productProps} />
                </div>
              )
            )
          }
        </div>
    </div>
  )
}

export default Home
