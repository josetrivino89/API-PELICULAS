import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { URL_API, API_KEY } from "../../Utils/Constans";
import Loading from "../../components/Layout/Loading";
import { Col, Row } from "react-bootstrap";
import "../Pelicula/index.css"
//*27:36 clase 02-11-2022

const Pelicula = () => {
  const params = useParams();
  const { id } = params;
  const URL_API_PELICULA = `${URL_API}/movie/${id}?api_key=${API_KEY}=en=ES`;

  const pelicula = useFetch(URL_API_PELICULA);

  if (!pelicula.result || pelicula.loading) return <Loading />;
  const peli = pelicula.result;

  console.log(pelicula);

  return (
    <div
      className="backdrop-Pelicula"
      style={{
        backgroundImage:`url('https://image.tmdb.org/t/p/original${peli.backdrop_path}')`,}}>
      <div className="dark-pelicula" />
      <Row>
        <Col md={6} style={{ zIndex: 1 }} className="d-flex justify-content-center align-items-center ">
          <div
            style={{
              backgroundImage:`url('https://image.tmdb.org/t/p/original${peli.poster_path}' )`,}} className="pelicula-poster"/>
        </Col>
        <Col md={6} className="pelicula-info d-flex">
          <div>
            <h1 style={{ zindex: 1 }}>{peli.title}</h1>
            <div className="pelicula-content" style={{ zindex: 1 }}>
              <h3>General</h3>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Pelicula;
