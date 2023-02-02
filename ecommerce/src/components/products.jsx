import React from 'react'
import Product from './product'

const Products = ({ products, filter }) => {
      return (
            <div className='container'>
                  <span>Category: {filter}</span>
                  <div className='products'>
                        { !products.length && <p>Loading...</p>}
                        {products.map(product => <Product key={product.id} product={product} />)}
                  </div>
            </div>

      )
}

export default Products