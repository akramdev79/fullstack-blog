import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Customer from "./pages/CustomerPage.jsx"
import UpdateConsultant from "./components/UpdateConsultant.jsx"
import Consultant from "./pages/ConsultantPage.jsx"
import DashboardPage from './pages/DashboardPage.jsx';
import ViewConsultants from './components/ViewConsultants.jsx';
import { Toaster} from 'react-hot-toast';
import { UserProvider } from './hooks/useUser';

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/customer",
      element: <Customer />
    },
    {
      path: "/consultant/:id",
      element: <UpdateConsultant />
    },
    {
      path: "/consultant",
      element: <Consultant />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/dashboard",
      element: <DashboardPage />
    },
    {
      path: "/viewConsultant",
      element: <ViewConsultants />
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
    <Toaster />
    <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>,
)
