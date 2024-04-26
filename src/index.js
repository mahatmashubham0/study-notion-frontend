import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/app";
import "../src/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>  // for using the redux-toolkit first add provider to provide store data
    <Router>
      <App />
    </Router>
  </Provider>
);
