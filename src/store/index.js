import { configureStore } from "@reduxjs/toolkit";
import productGlobal from "./slices/products.slice";
import cartGlobal from "./slices/cart.slice";

const store = configureStore({
  reducer: {
    productGlobal,
    cartGlobal,
  },
});

export default store;
