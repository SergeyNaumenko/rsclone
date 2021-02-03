import React from 'react';
import ItemList from '../list/list.component';
import {
  withData,
  withMovieService,
  withChildFunction,
  withOnclick,
} from '../hoc';
import compose from '../../utils/compose';
import { Link, withRouter } from 'react-router-dom';
import './style.css';
import { UserContextConsumer } from '../../context/login-context';

const renderName = ({ name, id }: { name: string, id:number }) => {
  return <Link to={`/genres/${id}`}>{ name }</Link>
}
const mapGenresMethodsToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getGenres,
  };
};

const RenderMovieListItem = (item: any,prop:any) => {

  const handlerWatchlist = async(item:any,val:any) => {
    try {
      const {jwtToken,serverApi} = val;
      const res = await serverApi.addWatchList(item,jwtToken);
      M.toast({html: res.mes})
    } catch (error) {
      M.toast({html: error});
    }
  }

  return (
    <UserContextConsumer>
    {value =>
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
            <Link to={`/movie/${item.id}`}>Details</Link>
          </div>
          <a className="btn-floating btn-large waves-effect waves-light red" onClick={(e) => {
            e.stopPropagation();
            handlerWatchlist(item,value)
          }}><i className="material-icons">add</i></a>

        </div>
      </div>
    </div>}
    </UserContextConsumer>
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

const mapMoviesByGenresMethodToProps = (movieApiService: any) => {
  return {
    getData: movieApiService.getByGenres
  };
};

const onItemSelected = (item: any, history: any) => history.push(`../movie/${item.id}`);

const GenresList = compose(
                    withMovieService(mapGenresMethodsToProps),
                    withData,
                    withChildFunction(renderName),
                    withOnclick(() => {}),
                    withRouter,
                  )(ItemList);

const MovieByGenreList = compose(
                          withMovieService(mapMoviesByGenresMethodToProps),
                          withData,
                          withChildFunction(RenderMovieListItem),
                          withOnclick(onItemSelected),
                          withRouter,
                        )(ItemList);

const TopRatedMoviesList = compose(
                      withMovieService(mapTopRatedMoviesMethodToProps),
                      withData,
                      withChildFunction(RenderMovieListItem),
                      withOnclick(onItemSelected),
                      withRouter,
                    )(ItemList);

const LatestMovie = compose(
                      withMovieService(mapLatestMoviesMethodToProps),
                      withData,
                      withChildFunction(RenderMovieListItem),
                      withOnclick(onItemSelected),
                      withRouter,
                    )(ItemList);

const PopularMoviesList = compose(
                      withMovieService(mapPopularMoviesMethodToProps),
                      withData,
                      withChildFunction(RenderMovieListItem),
                      withOnclick(onItemSelected),
                      withRouter,
                    )(ItemList);

const UpcomingMoviesList = compose(
                      withMovieService(mapUpcomingMoviesMethodToProps),
                      withData,
                      withChildFunction(RenderMovieListItem),
                      withOnclick(onItemSelected),
                      withRouter,
                    )(ItemList);

export {
  GenresList,
  TopRatedMoviesList,
  LatestMovie,
  PopularMoviesList,
  UpcomingMoviesList,
  MovieByGenreList,
};
