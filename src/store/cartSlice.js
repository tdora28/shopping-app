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
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: (builder) => {},
});

// This should be used for reducers, NOT extraReducers!!!
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
