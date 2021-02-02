import React from 'react';
import { withRouter } from 'react-router-dom';
import { MovieDetails } from '../components/movie_db_components/movieDB-movie-details';

interface pageProps{
  match: any,
}

const MoviePageComponent = ({ match }:pageProps) => {

  const { id } = match.params;

  return (
    <MovieDetails id={id}/>
  )
}

export default withRouter(MoviePageComponent);
