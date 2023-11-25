import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Home/Home';
import Register from './Components/Login/Register';
import Login from './Components/Login/Login';
import AuthProvider from './Providers/AuthProvider';
import Apartments from './Components/Apartments/Apartments';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Components/Dashboard/Dashboard';
import Agreements from './Components/Dashboard/Agreements/Agreements';
import PrivateRoute from './Routes/PrivateRoute';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/apartments",
        element: <Apartments></Apartments>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'agreements',
        element: <PrivateRoute><Agreements></Agreements></PrivateRoute>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
