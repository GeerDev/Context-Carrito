import { createContext, useReducer } from "react";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
};

const API_URL = "http://localhost:8000";
export const OrdersContext = createContext(initialState);

export const OrdersProvider = ({ children }) => {
  const createOrder = async (order) => {
    try {
      await axios.post(API_URL + "/orders", {productIds:order},
      {
        headers: {
          authorization: token,
        },
      },);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
