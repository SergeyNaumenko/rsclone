import React from 'react';
import ItemList from './item-list';
import { withData, withMovieService, withChildFunction } from './hoc';
import compose from '../utils/compose';

const renderName = ({ name }: { name: string }) => <span>{name}</span>;

const mapPersonMethodsToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getGenres,
  };
};

const renderMovieListItem = ({ title }: { title: string }) => (
  <span>{title}</span>
);

const mapTopRatedMethodToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getTopRatedMovies,
  };
};

const GenresList = compose(
  withMovieService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const TopRatedList = compose(
  withMovieService(mapTopRatedMethodToProps),
  withData,
  withChildFunction(renderMovieListItem)
)(ItemList);

export { GenresList, TopRatedList };
