import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Loading from "../Layout/Loading";

//*1.21.13 31-10-2022*//
const SliderMovie = ({ movies }) => {
  const peliculas = movies.result.results;

  if(!movies.result || movies.loading ) return <Loading/>

  console.log

  return (
    <Carousel fade>
      {peliculas.map((pelicula) => (
        <Carousel.Item key={pelicula.id} interval={4000}>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/original/${pelicula.backdrop_path}`}
            alt={pelicula.original_title}
          />
          <Carousel.Caption>
            <h3>{pelicula.original_title}</h3>
            <p>{pelicula.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SliderMovie;
