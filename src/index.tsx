import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";

import { configure } from 'mobx';
import { RootStoreContext, store } from "./store";

configure({ enforceActions: 'always' });

ReactDOM.render(
  <React.StrictMode>
    <RootStoreContext.Provider value={store}>
      <App />
    </RootStoreContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
