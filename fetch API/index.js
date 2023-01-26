const url = 'https://fakestoreapi.com/productl';

// //sending get request with fetch
// async function getProducts(){
//       let response = await fetch(url).then(res=>{
            
//             return res.json()});
//             console.log(response)
// }

// getProducts();

// sending post request with 

const data = {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
          rate: 3.9,
          count: 120
      }
  }

  async function postProduct(product){
        try {
              let response = await fetch(url, {
                    method: "POST",
                    headers: {
                          'Content-Type': "application/json"
                    },
                    body: JSON.stringify(product)
              }).then(res => res.json())
              console.log(response)
      } catch (error) {
            console.log(error)
      }
      
      
  }


  postProduct(data);