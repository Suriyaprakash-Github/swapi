import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  async function deleteMovieHandler(movie) {
    const response = await fetch(
      `https://react-swapi-3206d-default-rtdb.firebaseio.com/movies/${props.id}/.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button onClick={deleteMovieHandler}>Delete Movie</button>
    </li>
  );
};

export default Movie;
