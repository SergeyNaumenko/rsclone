import React from 'react';
import ISO639 from 'iso-639-1';
import './descriptionPanel.css';

interface DescriptionData {
  posterPath: string;
  title: string;
  releaseDate: string;
  genreIds: string;
  popularity: number;
  originalLanguage: string;
  voteCount: number;
  voteAverage: number;
  adult: boolean;
  overview: string;
}

const DescriptionPanel: React.FunctionComponent<DescriptionData> = (
  props: DescriptionData
) => {
  const {
    posterPath,
    title,
    releaseDate,
    genreIds,
    popularity,
    originalLanguage,
    voteCount,
    voteAverage,
    adult,
    overview,
  } = props;

  // const addGenres = (arr: object[]) => {
  //   arr.reduce((result, item) => {
  //     result += `${item}/`;
  //     return result;
  //   }, '');
  // };

  return (
    <div className="description-panel card-panel row">
      <div
        className="poster col s12 m12 l4 xl4"
        style={{ backgroundImage: `url(${posterPath})` }}
      />
      <div
        className="info black-text col s12 m12 l7 xl7
        offset-l1 offset-xl1"
      >
        <div className="title">
          <h4>{title}</h4>
        </div>
        <hr />
        <div className="release">
          <span className="category">Date of release:</span>
          <span className="description">{releaseDate || '-'}</span>
        </div>
        <hr />
        <div className="genres">
          <span className="category">Genres:</span>
          <span className="description">{genreIds}</span>
        </div>
        <hr />
        <div className="popularity">
          <span className="category">Popularuty:</span>
          <span className="description">{popularity}</span>
        </div>
        <hr />
        <div className="laguage">
          <span className="category">Language:</span>
          <span className="description">
            {ISO639.getName(originalLanguage)}
          </span>
        </div>
        <hr />
        <div className="vote-count">
          <span className="category">Number of votes:</span>
          <span className="description">{voteCount}</span>
        </div>
        <hr />
        <div className="vote-average">
          <span className="category">Average rating:</span>
          <span className="description">{voteAverage}</span>
        </div>
        <hr />
        <div className="adult">
          <span className="category">Adult movie:</span>
          <span className="description">{adult ? 'Yes' : 'No'}</span>
        </div>
        <hr />
        <div className="overview">
          <span className="category">Movie overview:</span>
          <span className="description">{overview}</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPanel;
