import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyAEK_cj5n0dT3o2HWfYcSb7cdXAz4eGn6Y",
  authDomain: "emmline.firebaseapp.com",
  projectId: "emmline",
  storageBucket: "emmline.appspot.com",
  messagingSenderId: "345539378253",
  appId: "1:345539378253:web:db0faa3f83925efa32b004"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
