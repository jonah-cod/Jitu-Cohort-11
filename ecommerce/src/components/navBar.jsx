import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import logo from '../images/icon.png'

const NavBar = () => {
      const [nav_items, setnav_items] = useState([])
      const [text, settext] = useState("")
      const [search, setsearch] = useSearchParams()
      
      const active = () => ({
            textDecoration: "underline",
            backgroundColor: "#F7F7F8"
      })


      const handleSearch =(e)=>{
            e.preventDefault()
            setsearch({searchedItem: text})
      }
      
     
      useEffect(() => {
            (async () => {
                  await fetch("https://fakestoreapi.com/products/categories")
                        .then(res => res.json()
                              .then(res => setnav_items(res)))
            })()

      }, [])

      return (
            <div className="nav">
                  <div className="icon">
                        <img src={logo} alt="" />
                  </div>
                  <div className="search">
                        <form action="" >
                            <input type="text" value={text} 
                                    name='search' 
                                    onChange={(e)=>settext(e.target.value)}/>

                            <button type='submit' 
                                    onClick={handleSearch}>search</button> 
                        </form>
                        
                  </div>
                  <div className="navbar">

                        <Link to='/' >Home</Link>
                        {nav_items.map(item => <Link to={`/${item}`} key={item}>{item}</Link>)}
                  </div>
                  <div className="cart">
                        <i className="far fa-cart-plus "></i>
                        <span className="counter">0</span>
                  </div>
                  <div className="menu">
                        <i className="fas fa-bars"></i>
                  </div>
            </div>
      )
}

export default NavBar