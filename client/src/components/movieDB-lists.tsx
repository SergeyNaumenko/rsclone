import React from 'react';
import ItemList from './item-list';
import {
  withData,
  withMovieService,
  withChildFunction,
} from './hoc';
import compose from '../utils/compose';

const renderName = ({ name }:{name:string}) => <span>{ name }</span>;

const mapPersonMethodsToProps = (movieApiService: any) => {
  
  return {
    getData: movieApiService.getGenres
  };
};

const GenresList = compose(
                     withMovieService(mapPersonMethodsToProps),
                     withData,
                     withChildFunction(renderName)
                   )(ItemList);

export {
  GenresList
};
