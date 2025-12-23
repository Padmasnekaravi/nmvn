import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var sobj={
  sno:1001,
  sname:"Padmasneka R",
  mark:[89,90,85,-5,90],
  grade:"excellent",
  location:"karur",
  native:"thiruvarur",
  issingle:true,
  hobbies:{
    hb1:"singing",
    hb2:"studying",
    hb3:"dancing"
  }

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={sobj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
