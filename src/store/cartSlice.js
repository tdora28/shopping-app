import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    // const addToCart = (state, action) => {
    // setCart([...cart, action.payload]);
    // }
    addToCart: (state, action) => {
      // Prev implementation
      // state.cart = [...state.cart, action.payload];
      const index = state.cart.findIndex(
        // action.payload is the product
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.cart[index].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      // remove product from cart if it exists
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },
    reducerQuantityByOne: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.cart[index].quantity -= 1;
      } else {
        state.cart.splice(index, 1);
      }
    },
  },
});

// This should be used for reducers, NOT extraReducers!!!
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
