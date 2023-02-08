import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Product from './product';

const SpecificCategory = () => {
      const { category } = useParams()


      const [category_products, setcategory_products] = useState([])
      async function getProductsOnCategory() {
            let products = await fetch(`https://fakestoreapi.com/products/category/${category}`).then(res => res.json())
            setcategory_products(products)
      }


      useEffect(() => {
            getProductsOnCategory()

            return ()=> setcategory_products([])
      }, [category])

      return (
            <div className='container'>
                  <h4>{category}</h4>
                  <div className="products">
                        {!category_products.length && <p>Loading...</p>}
                        {category_products.map(product => <Product key={product.id} product={product} />)}
                  </div>
            </div>
      )
}

export default SpecificCategory