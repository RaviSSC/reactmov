import React from "react";
import ActorCard from "../../component/MovieCard/ActorCard/ActorCard";

function ActorListPage(props) {
  let actorList = [];
  props.movies.forEach((movie) => {
    actorList = actorList.concat(movie.cast);
  });


  
  const actorSet = new Set(actorList);

  return (
    <>
      <h1>actors OF TODAY</h1>
      <ActorCard actorSet={actorSet} />
    </>
  );
}

export default ActorListPage;
