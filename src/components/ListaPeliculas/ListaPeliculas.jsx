import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import Loading from "../Layout/Loading";

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
              <ListGroup.Item key={pelicula.id}>
                {pelicula.original_title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ListaPeliculas;
