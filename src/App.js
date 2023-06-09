
import React, { useContext } from 'react';
import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Leftbar from './components/leftbar/Leftbar';
import Rightbar from './components/rightbar/Rightbar';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';


function App() {
  const {currentUser}=useContext(AuthContext);

  const {darkMode}=useContext(DarkModeContext);
  // console.log(darkMode);
  const Layout= ()=>{
    return (
      <div className={`theme-${darkMode?'dark':'light'}`}>
        <Navbar/>
        <div style={{display:'flex'}}>
          <Leftbar/>
          <Outlet/>
          <Rightbar/>
        </div>
      </div>
    )
  }

  const ProtectedLayout= ({children})=>{
    if(!currentUser){
      return <Navigate to='/login'/>
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedLayout> <Layout/> </ProtectedLayout> ,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/profile/:id',
          element:<Profile/>
        }
      ]
    },{
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);


  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
