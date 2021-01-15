import React from 'react';
import { SearchForm } from './search/search.componeent';

export const Header: React.FC = () => {
  return (
    <header className="page-header teal">
      <div className="container">
        <nav className="teal z-depth-0">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">KinoPoisk</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <SearchForm/>
              </li>
              <li><a href="/"><i className="material-icons">account_circle</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
