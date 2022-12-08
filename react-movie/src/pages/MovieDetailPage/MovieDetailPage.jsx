import React from 'react'
import Container from 'react-bootstrap/Container';

import Image from 'react-bootstrap/Image'
import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MovieDetailPage(props) {
  let { movieName } = useParams();
  let movie =  props.movies.find((movie)=> movie.title == movieName)


  return (
    <>
      <h1> movie &nbsp; {movie.title}</h1>
      <Container>
      <Row>
        <Col>{movie.releaseDate}</Col>
      </Row>
      <Row>
        <Image src={movie.posterPath} style={{width:"60%"}} />
      </Row>
    </Container>
    </>
  )
}

export default MovieDetailPage