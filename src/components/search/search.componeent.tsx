import React from 'react';
import './style.css';

export const SearchForm = () => {
  return (
    <form>
      <div className="input-field row">
        <input type="text" id="search" className="col s10 white-text"/>
        <label className="col s2" htmlFor="search">
          <i className="material-icons">search</i>
        </label>
      </div>
    </form>     
  )
}