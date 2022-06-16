import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  products: null,
};

const API_URL = "http://localhost:8000";

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(
      API_URL + "/products",
      );
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      })
    return res;
  };
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
