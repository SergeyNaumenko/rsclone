import React from "react";
import {createIntl, createIntlCache} from 'react-intl';

const DescriptionPanel: React.FC = () => {
  const {
    posterPath,
    title,
    releaseDate,
    genres,
    popularity,
    originalLanguage,
    voteCount,
    voteAverage,
    adult,
    overview,
  } = this.props;

  const addGenres = (arr: Array<object>) => {
  };

  const cache = createIntlCache()
  const intl = createIntl({
    locale: 'en-US',
    messages: {}
  }, cache);
  
  return (
    <div className="description-panel">
      <div className="poster"
        style={{backgroundImage: `url(${posterPath})`}}></div>
      <div className="info">
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="about">
          <span>About movie:</span>
        </div>
        <div className='release'>
          <span>Date of release:</span>
          <span>{releaseDate ? releaseDate : '-'}</span>
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
          <span>{intl.formatDisplayName(originalLanguage, {type: 'language'})}</span>
        </div>
        <div className='vote-count'>
          <span>Number of votes:</span>
          <span>{voteCount}</span>
        </div>
        <div className='vote-average'>
          <span>Average rating:</span>
          <span>{voteAverage}</span>
        </div>
        <div className='adult'>
          <span>Adult movie:</span>
          <span>{adult ? 'Yes' : 'No'}</span>
        </div>
        <div className='overview'>
          <span>Movie overview:</span>
          <span>{overview}</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPanel;
