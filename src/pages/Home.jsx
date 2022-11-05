import React from 'react'
import { Row,Col } from 'react-bootstrap'
import SliderMovie from '../components/Layout/SliderMovie'
import useFetch from '../hooks/useFetch'
import {URL_API,API_KEY} from "../Utils/Constans"

const URL_API_NEW_PELI = `${URL_API}/movie/550?api_key=${API_KEY}=en=ES`

const Home = () => {

    const newPeliculas= useFetch(URL_API_NEW_PELI)

    console.log(newPeliculas); //minuto 1:05:58


  return (
    <>
      <SliderMovie movies={newPeliculas} />
        <Row>
          <Col>Lista de Peliculas Populares</Col>
          <Col>Peliculas mas votadas</Col>
        </Row>
    </>
  );
}

export default Home