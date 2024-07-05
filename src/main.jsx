import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Countries from './components/Countries/index.jsx'
import Continent from './components/Continents/index.jsx'
import Country from './components/Country/index.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/countries',
    element: <Countries />
  },
  {
    path:'/continents',
    element:<Continent/>
  },
  {
    path:'/country',
    element:<Country/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
