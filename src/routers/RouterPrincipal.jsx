import React from 'react'
import {BrowserRouter as Router ,Route,Routes,NavLink  } from "react-router-dom";
import Navegacion from "../components/Layout/Navegacion";
import Footer from "../components/Layout/Footer";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";


const RouterPrincipal = () => {

  return (
      <Router>
        {/* navbar */}
        <Navegacion/>
    

    <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/' element={<Error404/>}/>
    </Routes>

    {/* footer */}
    <Footer/>
    </Router>
    
  )
}

export default RouterPrincipal