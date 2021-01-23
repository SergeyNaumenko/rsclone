import React, { FunctionComponent } from 'react';
import './style.css';

const SearchForm: FunctionComponent = () => {
  return (
    <form>
      <div className="input-field row">
        <label className="col s2" htmlFor="search">
          <input type="text" id="search" className="col s10 white-text" />
          <i className="material-icons">search</i>
        </label>
      </div>
    </form>
  );
};

export default SearchForm;
