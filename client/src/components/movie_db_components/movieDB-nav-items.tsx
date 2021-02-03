import React from 'react';
import { Link } from 'react-router-dom';
import {
  GenresList,
  TopRatedMoviesList,
  LatestMovie,
  PopularMoviesList,
  UpcomingMoviesList,
} from './movieDB-lists';

const listItems = [
  {
    id: 0,
    name: 'latest',
    displayName: 'Latest',
    list: <LatestMovie/>,
  },
  {
    id: 1,
    name: 'popular',
    displayName: 'Popular',
    list: <PopularMoviesList/>,
  },
  {
    id: 2,
    name: 'top',
    displayName: 'Top Rated',
    list: <TopRatedMoviesList/>,
  },
  {
    id: 3,
    name: 'upcoming',
    displayName: 'Upcoming',
    list: <UpcomingMoviesList/>,
  }
];

const renderMoviesLinks = ({ displayName, name }:{displayName:string, name:string}) => {
  return (
    <Link to={`/list/${name}`}>{ displayName }</Link>
  )
}

export {
  listItems,
  renderMoviesLinks,
}
