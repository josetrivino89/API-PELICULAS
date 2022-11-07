import React from "react";
import { Badge, Image, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loading from "../Layout/Loading";
import "./index.css"
//*min 2.09.34 31-12-2022

useNavigate

const ListaPeliculas = ({ titulo, movies }) => {
  const peliculas = movies.result.results; //* consultar porque trae esto de nuevo
  const Navigate = useNavigate()

  if (!movies.result || movies.loading) return <Loading />;
  return (
    <>
    <h3 className="mt-4 mb-4 ">{titulo} </h3>
      <Card className="Lista-Pelis">
        <Card.Body>          
          <ListGroup>
            {peliculas.map((pelicula) => (
              <ListGroup.Item action key={pelicula.id} onClick={()=>Navigate(`/pelicula/${pelicula.id}`)}>
                <div className="ms-2 me-auto d-flex justify-content-between">
                  <Image roundedCircle src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`} fluid style={{height:`55px`, width:`55px`}}/>       
                  <div className="fw-bold"><h5>{pelicula.original_title}</h5></div>                  
                </div>
                <Badge bg="danger" pill className="ml-2 me-auto">
                  {pelicula.vote_average}
                </Badge>
               
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListaPeliculas;
