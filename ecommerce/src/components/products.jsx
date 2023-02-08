import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Product from './product';

const Products = () => {

      const [products, setproducts] = useState([])
      const [search, setsearch] = useSearchParams();
      const [filter, setfilter] = useState("")
      
      async function getProducts() {
            let products = await fetch("https://fakestoreapi.com/products").then(res => res.json())
            setproducts(products)
      }


      useEffect(() => {
            
            getProducts()
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