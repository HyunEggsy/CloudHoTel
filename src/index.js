import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// 공유 저장소 Provider 태그 import
import { Provider } from "react-redux";
// 공유 저장소 import
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 공유저장소 사용한다는 표시 태그
    <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
