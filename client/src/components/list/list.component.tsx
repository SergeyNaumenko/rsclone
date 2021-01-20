import React from 'react';
import ISO639 from 'iso-639-1';
import './list.css';

const ListComponent: React.FunctionComponent<any> = (props: any) => {
  const { data, onItemSelected } = props;

  const renderListItem = (item: any) => {
    return (
      <div className="item-wrapper valign-wrapper row">
        <div
          className="item-poster col s2"
          style={{ backgroundImage: `url(${item.posterPath})` }}
        />
        <div className="item-description col s4 offset-s4">
          <span className="item_title">{item.title}</span>
          <span className="item_genre">{item.genreIds}</span>
          <span className="item_release_date">{item.releaseDate}</span>
          <span className="item_language">
            {ISO639.getName(item.originalLanguage)}
          </span>
          <span />
        </div>
        <div className="item-additional-info col s2">
          <span>
            <i className="material-icons">grade</i>
          </span>
          <span className="item-rating">{item.voteAverage}</span>
          <div className="item-adult">{item.adult ? '+18' : ''}</div>
        </div>
      </div>
    );
  };

  const list = data.map((item: any) => {
    const { id } = item;
    const renderItem = renderListItem(item);

    return (
      <div
        key={id}
        onKeyDown={onItemSelected(id)}
        role="link"
        tabIndex={id}
        className="list hoverable teal lighten-5"
      >
        {renderItem}
      </div>
    );
  });

  return <ul>{list}</ul>;
};

export default ListComponent;
