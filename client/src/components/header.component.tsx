import React,{ useEffect } from 'react';
import SearchForm from './search/search.componeent';
import { Link, withRouter } from 'react-router-dom'


interface MyProps {
  logout: any;
}

const Header:React.FC<any>= ({ logout }: MyProps) => {
  let instances:any = null;

  useEffect(() => {
    const elem:any = document.querySelector('.dropdown-trigger');
    instances = M.Dropdown.init(elem, {});
  });
  
  const handler = () => {
    instances.open();
  }
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
                  <li><Link to='/profile'>Оценки</Link></li>
                  <li><a href="#!">Фильмы</a></li>
                  <li><a href="#!" onClick={() => logout()}>Выйти</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
