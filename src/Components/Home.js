import React, { useEffect, useState } from 'react'
import { useStateValue } from '../StateProvider';
import "../CSS-Files/Home.css"
import Product from './Product'
import productPropsArray from '../productPropsArray';

function Home() {

  // let fetchedData;
  // fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json())
  // .then(json=>(fetchedData = json))

  // console.log(fetchedData);

  const [{ category,search }] = useStateValue();

  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://fakestoreapi.com/products"
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);


    // console.log(data);
    

  return (
    <div className='home'>
        <img src='https://m.media-amazon.com/images/I/61+Om+g+8SL._SX3000_.jpg' className='backgroung_img'/>
        <div class="row product_container justify-content-center">
          {
            data.map(productProps => 
              {
                // console.log(productProps);
                if(
                    (
                      (category==="ALL") || 
                      (productProps.category === category) 
                    ) 
                    && 
                    (
                      (search=="") || 
                      ((productProps.title.toLowerCase()).includes(search.toLowerCase()))
                    )
                  ){
                  return(
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <Product product={productProps} />
                    </div>
                  )
                }
              }
            )
          }
        </div>
    </div>
  )
}

export default Home
