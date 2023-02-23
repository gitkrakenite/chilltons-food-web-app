import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/store";
import { Provider } from "react-redux";
// import Toaster from "react-hot-toast";

ReactDOM.render(
  <Provider store={store}>
    {/* <Toaster position="top-right" reverseOrder={false} /> */}
    <App />
  </Provider>,

  document.getElementById("root")
);
