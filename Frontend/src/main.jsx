import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/index";
import { FirebaseContext } from './store/Context';
import firebase from './firebase/firebaseConfig'
import { ToastContainer } from "react-toastify";
import AuthContext from './store/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "./main.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <ToastContainer  />
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </FirebaseContext.Provider>
  </React.StrictMode>,
)
