import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Products from './components/products';

function App() {

  const [products, setproducts] = useState([])
  const [filter, setfilter] = useState("all");

  const getProducts = async () => {
    let products;
    if (filter === "all") {
      products = await fetch("https://fakestoreapi.com/products").then(res => res.json());
    } else {
      products = await fetch(`https://fakestoreapi.com/products/category/${filter}`).then(res => res.json());
    }

    return products;
  }

  console.log(filter)
  useEffect(() => {
    (function () {
      getProducts().then(res => setproducts(res))
    })()

    return()=>{
      setproducts([])
    }

  }

    , [filter])

  return (
    <div className="App">
      <NavBar setfilter={setfilter} filter={filter} />
      <Products products={products} filter={filter}/>
    </div>
  );
}

export default App;
