import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import Product from './product';

import { fetchProducts } from '../redux/slices/productsSlice'
const Products = () => {

      const [search, setsearch] = useSearchParams();
      const [filter, setfilter] = useState("")
      const dispatch = useDispatch()
      
      const products = useSelector(state=>state.products)
      


      useEffect(() => {
            dispatch(fetchProducts())
      }, [])

      useEffect(() => {
            setfilter(search.get("searchedItem")?.toLowerCase())
      }, [search])
      
      return (
            <div className='container'>
                  <h4>Products</h4>
                  <div className='products'>
                        {!products.length && <p>Loading...</p>}
                        {filter? products.filter(product=>product.title.toLowerCase().includes(filter)).map(product => <Product key={product.id} product={product} />): products.map(product => <Product key={product.id} product={product} />)}
                  </div>
            </div>

      )
}

export default Products