import React from 'react';  // library -> Underlying engine for HOW app is built
import ReactDOM from 'react-dom/client';  // library -> Related to Web. Tools to build Web App
// React Native would be a library to specifically build mobile applications
// Others exist for building virtual reality apps, for example
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// index.js is looking for a <div> element in index.html with the id of 'root'.
// React says, "Take that <div> and replace it and render into it our entire React app."
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>  {/* Created by create-react-app to restrict certain features (esp depricated *old*, unsupported ones) */}
    
    {/* 
    - This <App/> element is "some function code that will return us more HMTL"
    - Think of this as the entire React Application.
    - It's an element that contains more code to generate more HTML.
    */}
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
