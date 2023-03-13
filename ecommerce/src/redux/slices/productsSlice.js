import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const state = {
      products: [],
      cart: [{id:3,
            title:"Mens Cotton Jacket",
            price:55.99,
            description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            category:"men's clothing",
            image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            quantity: 1
            
            }],
      product: {},
      loading: false,
      message: ""
}


export const fetchProducts = createAsyncThunk('products/fecth', async()=>{
      return fetch("https://fakestoreapi.com/products").then(data=>data.json())
})

const products = createSlice({
      name: 'productsSlice',
      initialState: state,
      reducers:{
            addTocart: (state, {payload})=>{
                  const cartItem = state.cart.find(item=>item.id === payload.id)
                  cartItem && (cartItem.quantity = cartItem.quantity+1)
                  !cartItem && state.cart.push({...payload, quantity:1})
            },
            deleteFromCart: (state, {payload})=>{
                  state.cart.filter(cartItem=>cartItem.id !== payload)
            }
      },

      extraReducers:{
            [fetchProducts.pending]: (state, action)=>{
                  state.loading = true;
            },

            [fetchProducts.fulfilled]: (state, action)=>{
                  state.loading = false;
                  state.products = action.payload;
            }
      }
})

export const { addTocart, deleteFromCart  } = products.actions;

export default products.reducer