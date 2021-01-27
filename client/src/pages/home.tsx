import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ItemList from '../components/list/list.component';
import {
  GenresList,
  TopRatedMoviesList,
  LatestMovie,
  PopularMoviesList,
  UpcomingMoviesList,
} from '../components/movie_db_components/movieDB-lists';

interface pageProps{
  history:any,
  match: any,
}

const HomepageComponent = ({ history, match}:pageProps) => {
  const { listName } = match.params;
  console.log(listName);
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

  const listItem: any = listItems.find((item) => item.name === listName);
  const listComponent: React.FC | React.Component = listItem ? listItem.list : null;

  const onItemSelected = function(id:number) {
    history.push(id)
  };

  const renderMoviesLinks = ({ displayName, name }:{displayName:string, name:string}) => {
    return (
      <Link to={`/list/${name}`}>{ displayName }</Link>
    )
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col l2 s5'>
          <div className="section">
            <h5>Movies</h5>
            <ItemList data={listItems} onItemSelected={onItemSelected}>
              {renderMoviesLinks}
            </ItemList>
            <div className="divider"></div>
            <p><Link to='/genres'>Genres</Link></p>
          </div>
        </div>
        <div className='col l10 s7'>{ listComponent }</div>
      </div>
    </div>
  )
}

export default withRouter(HomepageComponent);
