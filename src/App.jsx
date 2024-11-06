import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Login from './pages/forms/Login'
import SignUp from './pages/forms/SignUp'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'




function App() {
const router = createBrowserRouter([

{path: "/",
 element: <Home/>

},
{path: "/login",
 element: <Login/>

},
{path: "/signup",
 element: <SignUp/>

},
{path: "/dashboard",
 element: <DashboardLayout/>

},
{path: "/dash",
 element: <Dashboard/>

}


])

return  <RouterProvider router= {router}/> 
}

export default App
