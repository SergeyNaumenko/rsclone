import React,{ useEffect } from 'react';
import SearchForm from './search/search.componeent';
import { Link, withRouter } from 'react-router-dom';
import withUser  from './hoc/withUser';


const Header:React.FC<any>= ({prop}:any) => {
  let instances:any = null;
  useEffect(() => {
    const elem:any = document.querySelector('.dropdown-trigger');
    console.log(prop);
    instances = M.Dropdown.init(elem, {});
  });

  const handler = () => {
    instances.open();
  }
  const {logout} = prop;
  return (
    <header className="page-header teal">
      <div className="container">
        <nav className="teal z-depth-0">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              KinoPoisk
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* <li>
                <SearchForm />
              </li> */}
              <li>
                <a className='dropdown-trigger btn' href='#' onClick = {handler} data-target='dropdown1'>
                  <i className="material-icons">account_circle</i>
                </a>
                <ul id='dropdown1' className='dropdown-content'>
                  <li><Link to='../profile'>Your Profile</Link></li>
                  <li><Link to="../rating">Your Ratings</Link></li>
                  <li><Link to="../watchlist">Watchlist</Link></li>
                  <li><a href="#!" onClick={() => logout()}>Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default withUser(Header);
