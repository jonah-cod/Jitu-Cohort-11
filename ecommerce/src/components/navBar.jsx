import React, {useState, useEffect} from 'react';
import logo from '../images/icon.png'

const NavBar = ({setfilter, filter}) => {
      const [nav_items, setnav_items] = useState([])
      
      const handleGetCategory = (category)=>{
            setfilter(category)
      }
      
      const active = ()=> ({
            textDecoration: "underline",
            backgroundColor: "#F7F7F8"
      })

      

      useEffect(() => {
            (async()=>{
                  await fetch("https://fakestoreapi.com/products/categories")
                  .then(res=>res.json()
                  .then(res=>setnav_items(res)))
            })()
       
      }, [])
      
      return (
            <div className="nav">
                  <div className="icon">
                        <img src={logo} alt="" />
                  </div>
                  <div className="navbar">
                        <ul>
                        <li onClick={()=>handleGetCategory("all")}
                              style={filter==="all"? active(): {}}>Home</li>


                            {nav_items.map(item=><li 
                                    onClick={()=>handleGetCategory(item)} 
                                    key={item}
                                    style={filter===item? active(): {}}>{item}</li>)}  
                        </ul>
                        
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