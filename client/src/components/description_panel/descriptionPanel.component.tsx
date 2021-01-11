import React from "react";
import './descriptionPanel.css';

const DescriptionPanel: React.FC = () => {
  const {
    title,
    release_date,
    genres,
    popularity,
    original_language,
    runtime,
    production_countries,
    revenue,
    budget,
    adult,
  } = this.props;

  const addGenres = (arr: Array<object>) => {
    arr.reduce((genres: string, item: object) => {
      genres += `${item.name} `;
      return genres;
    }, "");
  };

  const addCountries = (arr: Array<object>) => {
    arr.reduce((countries: string, item: object) => {
      countries += `${item.name} `;
      return countries;
    }, "");
  };

  const getLanguage = (string: string) => {
  };
  
  return (
    <div className="description-panel">
      <div className="poster"
        style={{backgroundImage: `url(${path})`}}></div>
      <div className="info">
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="about">
          <span>About movie:</span>
        </div>
        <div className='release'>
          <span>Date of release:</span>
          <span>{release_date ? release_date : '-'}</span>
        </div>
        <div className='genres'>
          <span>Genres:</span>
          <span>{this.addGenres(genres)}</span>
        </div>
        <div className='popularity'>
          <span>Popularuty:</span>
          <span>{popularity}</span>
        </div>
        <div className='laguage'>
          <span>Language:</span>
          <span>{this.getLanguage(original_language)}</span>
        </div>
        <div className='runtime'>
          <span>Runtime:</span>
          <span>`${runtime} minutes`</span>
        </div>
        <div className='countries'>
          <span>Countries:</span>
          <span>{this.addCountries(production_countries)}</span>
        </div>
        <div className='revenue'>
          <span>Revenue:</span>
          <span>{revenue}$</span>
        </div>
        <div className='budget'>
          <span>Budget:</span>
          <span>{budget}$</span>
        </div>
        <div className='adult'>
          <span>Adult movie:</span>
          <span>{adult ? 'Yes' : 'No'}</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPanel;
