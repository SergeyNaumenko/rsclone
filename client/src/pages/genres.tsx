import React from 'react';
import { withRouter } from 'react-router-dom';
import { GenresList, MovieByGenreList } from '../components/movie_db_components/movieDB-lists';

interface pageProps{
  history:any,
  match: any,
}

const GenresPageComponent = ({ match }:pageProps) => {
  const { id } = match.params;

  const moviesByGenres = id ? <MovieByGenreList id={id}/> : '';
  return (
    <div className='container'>
      <div className='row'>
        <div className='col l2 s5'>
          <div className="section">
            <h5>Genres</h5>
              <GenresList/>
          </div>
        </div>
        <div className='col l10 s7'>
          {moviesByGenres}
        </div>
      </div>
    </div>
  )
};

export default withRouter(GenresPageComponent);
