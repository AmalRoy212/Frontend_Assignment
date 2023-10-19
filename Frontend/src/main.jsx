import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./routes/index";
import { FirebaseContext } from './store/Context';
import { app } from './firebase/firebaseConfig'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ app }}>
      <RouterProvider router={router} />
    </FirebaseContext.Provider>
  </React.StrictMode>,
)
