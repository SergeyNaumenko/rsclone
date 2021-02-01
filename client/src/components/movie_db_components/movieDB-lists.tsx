import React from 'react';
import ItemList from '../list/list.component';
import {
  withData,
  withMovieService,
  withChildFunction,
  withOnclick,
} from '../hoc';
import compose from '../../utils/compose';
import ISO639 from 'iso-639-1';
import { withRouter } from 'react-router-dom';

import './style.css';

const renderName = ({ name }: { name: string }) => <span>{name}</span>;

const mapPersonMethodsToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getGenres,
  };
};

const renderMovieListItem = (item: any) => {
  return (
    <div className="col s12">
      <div className="card horizontal movie-list-card">
        <div className="card-image">
          <img src={item.posterPath}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <h5 className="header">{item.title}</h5>
            <p>{item.overview}</p>
            <span>
              <i className="material-icons">grade</i>
            </span>
            <span className="item-rating">{item.voteAverage}</span>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
    /*<div className="item-wrapper valign-wrapper row">
      <div
        className="item-poster col s2"
        style={{ backgroundImage: `url(${item.posterPath})` }}
      />
      <div className="item-description col s4 offset-s4">
        <span className="item_title">{item.title}</span>
        <span className="item_genre">{item.genreIds}</span>
        <span className="item_release_date">{item.releaseDate}</span>
        <span className="item_language">
          {ISO639.getName(item.originalLanguage)}
        </span>
        <span />
      </div>
      <div className="item-additional-info col s2">
        <span>
          <i className="material-icons">grade</i>
        </span>
        <span className="item-rating">{item.voteAverage}</span>
        <div className="item-adult">{item.adult ? '+18' : ''}</div>
      </div>
    </div>*/
  );
};

const mapTopRatedMoviesMethodToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getTopRatedMovies
  };
};

const mapLatestMoviesMethodToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getLatestMovies
  };
};

const mapPopularMoviesMethodToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getPopularMovies
  };
};

const mapUpcomingMoviesMethodToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getUpcomingMovies
  };
};

const onItemSelected = (id: number, history: any) => history.push(`../movie/${id}`);

const GenresList = compose(
  withMovieService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const TopRatedMoviesList = compose(
                      withMovieService(mapTopRatedMoviesMethodToProps),
                      withData,
                      withChildFunction(renderMovieListItem),
                      withOnclick(onItemSelected),
                      withRouter,
                    )(ItemList);

const LatestMovie = compose(
                      withMovieService(mapLatestMoviesMethodToProps),
                      withData,
                      withChildFunction(renderMovieListItem),
                      withOnclick(onItemSelected),
                      withRouter,
                    )(ItemList);

const PopularMoviesList = compose(
                      withMovieService(mapPopularMoviesMethodToProps),
                      withData,
                      withChildFunction(renderMovieListItem),
                      withOnclick(onItemSelected),
                      withRouter,
                    )(ItemList);

const UpcomingMoviesList = compose(
                      withMovieService(mapUpcomingMoviesMethodToProps),
                      withData,
                      withChildFunction(renderMovieListItem),
                      withOnclick(onItemSelected),
                      withRouter,
                    )(ItemList);

export {
  GenresList,
  TopRatedMoviesList,
  LatestMovie,
  PopularMoviesList,
  UpcomingMoviesList,
};
