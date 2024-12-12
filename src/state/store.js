// import { applyMiddleware } from "redux";
// import reducers from "./reducers";
// import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import amountReducer from "./reducers/amountReducer"; // Import your reducer


// export const store = configureStore(reducers, {}, applyMiddleware(thunk))


const store = configureStore({
  reducer: {
    amount: amountReducer, // Map the reducer to a key (state.amount)
  },
});

export { store };