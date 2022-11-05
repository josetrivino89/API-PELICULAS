import React from "react";
import { Badge, Image, Card, ListGroup } from "react-bootstrap";
import Loading from "../Layout/Loading";

//*min 2.09.34 31-12-2022
const ListaPeliculas = ({ titulo, movies }) => {
  const peliculas = movies.result.results; //* consultar porque trae esto de nuevo

  if (!movies.result || movies.loading) return <Loading />;
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <ListGroup>
            {peliculas.map((pelicula) => (
              <ListGroup.Item action key={pelicula.id}>
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
