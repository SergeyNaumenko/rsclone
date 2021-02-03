import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ItemList from '../components/list/list.component';
import { listItems, renderMoviesLinks } from '../components/movie_db_components/movieDB-nav-items';

interface pageProps{
  history:any,
  match: any,
}

const HomepageComponent = ({ history, match}:pageProps) => {
  /*const { listName } = match.params;

  const listItem: any = listItems.find((item) => item.name === listName);
  const listComponent: React.FC | React.Component = listItem ? listItem.list : null;
*/
  const lastMovieListId = 0;
  const lastMovieObject: any = listItems.find((item) => item.id === lastMovieListId);
  const lastMovieComponent: React.FC | React.Component = lastMovieObject ? lastMovieObject.list : null;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col l2'>
          <div className="section">
            <h5>Movies</h5>
            <ItemList data={listItems} onItemSelected={(item: any)=>{history.push(`./${item.name}`)}}>
              {renderMoviesLinks}
            </ItemList>
            <div className="divider"></div>
            <p><Link to='/genres'>Genres</Link></p>
          </div>
        </div>
        <div className='col l10'>{ lastMovieComponent }</div>
      </div>
    </div>
  )
}

export default withRouter(HomepageComponent);
