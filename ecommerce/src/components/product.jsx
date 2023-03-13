import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addTocart } from '../redux/slices/productsSlice';
import { useDispatch } from 'react-redux';


const Product = ({product}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleNavigation = (id)=>{
    navigate(`/products/${id}`)
  }

  const handleAddToCart = ()=>{
    dispatch(addTocart(product))
  }
  return (
    <div className='product'>
      <img src={product.image} alt="" onClick={()=>handleNavigation(product.id)}/>
      <div className='details'>
            <h6 onClick={()=>handleNavigation(product.id)}>{product.title}</h6>
            <p>category: {product.category}</p>
            <p>Price: <span> {product.price}</span></p>
            <button onClick={handleAddToCart} className="btn-add-to-cart">add to cart</button>
    </div>
    </div>
  )
}

export default Product