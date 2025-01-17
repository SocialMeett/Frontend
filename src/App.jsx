import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Login from './pages/forms/Login'
import SignUp from './pages/forms/SignUp'
import DashboardLayout from './layouts/DashboardLayout'
import PanicButton from './pages/dashboard/PanicButton'
import Map from './pages/dashboard/Map'
import FriendsList from './pages/dashboard/FriendsList'
import Logout from './pages/dashboard/Logout'
import UserProfile from './pages/dashboard/UserProfile'
import Notifications from './pages/dashboard/Notifications'
import Messages from './pages/dashboard/Messages'
import EmergencyContactForm from './pages/dashboard/EmergencyContact'
import JoinCircle from './pages/Circle/Join'
import CreateCircle from './pages/Circle/Create'
import DashboardOverview from './pages/dashboard/Dashboard'
import ProtectedRoute from './pages/dashboard/ProtectedRoute'
import CircleOptions from './pages/Circle/CircleOptions'
import EmergencyContactList from './pages/dashboard/FriendsList'




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

{path: "/circle-options",
 element: <CircleOptions/>
},

{ path: "/create",
element: <CreateCircle/>
},

{path: "/join",
 element: <JoinCircle/>
},

{path: "/dashboard",
 element: <ProtectedRoute element={<DashboardLayout />} />,
children: [
    {
        index: true,
        element: <DashboardOverview/>
    },
    {
        path: "contacts",
        element:<EmergencyContactList/>
    },
    {
        path: "panic",
        element:<PanicButton/>
    },
    {
        path: "map",
        element:<Map/>
    },
    {
        path: "logout",
        element:<Logout/>
    },
    {
        path: "user",
        element:<UserProfile/>
    },
    {
        path: "notify",
        element:<Notifications/>
    },
    {
        path: "message",
        element:<Messages/>
    },
    {
        path: "emergency",
        element:<EmergencyContactForm/>
    },

],
},




])

return  <RouterProvider router= {router}/> 
}

export default App