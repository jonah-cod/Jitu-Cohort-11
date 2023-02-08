import React from 'react';
import { useNavigate } from 'react-router-dom';
const Product = ({product}) => {
  const navigate = useNavigate()

  const handleNavigation = (id)=>{
    navigate(`/products/${id}`)
  }
  return (
    <div className='product'>
      <img src={product.image} alt="" onClick={()=>handleNavigation(product.id)}/>
      <div className='details'>
            <h6 onClick={()=>handleNavigation(product.id)}>{product.title}</h6>
            <p>category: {product.category}</p>
            <p>Price: <span> {product.price}</span></p>
            <button >add to cart</button>
    </div>
    </div>
  )
}

export default Product