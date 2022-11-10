import React from 'react'
import { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { API_KEY, API_KEY2, URL_API } from '../Utils/Constans';

const Estrenos = () => {
 const [listaPelicula, setListaPelicula] = useState([]);
 const [page,setPage] = useState(1);
 const navigate = useNavigate()

 //1.46. clase dia 02-11-2022
 useEffect(() => {


   
 (
  async () => {
   const response= await fetch(`${URL_API}/movie/now_playing?api_key=${API_KEY2}&language=es-ES&page=${page}`)
   const data= await response.json()
    console.log(data);
   setListaPelicula(data)

    }
    
    
 )()
   
 }, [page])



 
  return (
    <>
      <Row>
        <Col>
          <h1>Nuevos Lanzamientos</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row className='mt-4'>
            {
            listaPelicula?.results?.length > 0 && listaPelicula?.results?.map(peli=>(
                <Col xs={4}>              
                <Card style={{ width: "28rem" }}>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${peli.backdrop_path}`} />
                  <Card.Body>
                    <Card.Title>{peli.original_title}</Card.Title>
                    <Card.Text>{peli.overview}</Card.Text>
                    <Button variant="primary" onClick={()=>navigate(`/pelicula/${peli.id}`)}>Ver mas</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
            }
                     </Row>
        </Col>
        <Col xs={12}>Paginacion</Col>
      </Row>
    </>
  );
}

export default Estrenos