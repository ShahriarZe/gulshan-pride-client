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
import ManageMembers from './Components/Dashboard/ManageMembers/ManageMembers';
import Announcements from './Components/Dashboard/Announcements/Announcements';
import AdminRoute from './Routes/AdminRoute';

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
        element: <AdminRoute><Agreements></Agreements></AdminRoute>
      },
      // Admin routes
      {
        path: 'manageMembers',
        element: <AdminRoute><ManageMembers></ManageMembers></AdminRoute>
      },
      {
        path: 'makeAnnouncements',
        element: <AdminRoute><Announcements></Announcements></AdminRoute>
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
