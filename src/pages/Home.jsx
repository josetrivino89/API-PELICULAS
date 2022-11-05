import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ListaPeliculas from '../components/ListaPeliculas'
import SliderMovie from '../components/SliderMovie'
import useFetch from '../hooks/useFetch'
import {URL_API,API_KEY} from "../Utils/Constans"


const URL_API_NEW_PELI = `${URL_API}/movie/now_playing?api_key=${API_KEY}=en=ES`
const URL_API_POPULARES_PELI = `${URL_API}/movie/popular?api_key=${API_KEY}=en=ES`
const URL_API_TOP_PELI = `${URL_API}/movie/top_rated?api_key=${API_KEY}=en=ES`

const Home = () => {

    const newPeliculas= useFetch(URL_API_NEW_PELI)
    const popularesPelis= useFetch(URL_API_POPULARES_PELI)
    const topPelis= useFetch(URL_API_TOP_PELI)

    console.log(newPeliculas); //minuto 1:05:58


  return (
    <>
      <SliderMovie movies={newPeliculas} />
        <Row>
          <Col>
          <ListaPeliculas titulo="Peliculas mas vistas" movies={popularesPelis}/>
          </Col>
          <Col>
          <ListaPeliculas titulo="Pelis mas puntuadas" movies={topPelis}/>
          </Col>
        </Row>
    </>
  );
}

export default Home