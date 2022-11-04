import React from 'react'
import {BrowserRouter as Router ,Route,Routes,NavLink  } from "react-router-dom";
import Navegacion from "../components/Layout/Navegacion";
import Footer from "../components/Layout/Footer";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Pelicula from '../pages/Pelicula';
import Popular from '../pages/Popular';
import Buscador from '../pages/Buscador';
import Estrenos from '../pages/Estrenos';
import Container from 'react-bootstrap/Container';


const RouterPrincipal = () => {

  return (

      <Router>

        {/* navbar */}
    <Navegacion/>    
    <Container>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/estrenos' element={<Estrenos/>}/>
            <Route path='/search' element={<Buscador/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/pelicula/id:' element={<Pelicula/>}/>




            <Route path='/*' element={<Error404/>}/>
        </Routes>
    </Container>

    {/* footer */}
    <Footer/>
    </Router>
    
  )
}

export default RouterPrincipal