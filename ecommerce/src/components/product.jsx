import React from 'react'

const Product = ({product}) => {
  return (
    <div className='product'>
      <img src={product.image} alt="" />
      <div className='details'>
            <h6>{product.title}</h6>
            <p>category: {product.category}</p>
            <p>Price: <span> {product.price}</span></p>
            <button >add to cart</button>
    </div>
    </div>
  )
}

export default Product