import React from 'react';
import './list.css';

const ListComponent: React.FunctionComponent<any> = (props: any) => {
  const { data, onItemSelected, children: renderListItem } = props;

  const list = data.map((item: any) => {
    const { id } = item;
    const renderedItem = renderListItem(item);

    return (
      <li
        key={id}
        onClick={() => onItemSelected(id)}
        role="link"
        tabIndex={id}
        className="list hoverable teal lighten-5"
      >
        {renderedItem}
      </li>
    );
  });

  return (
    <ul>
      {list}
    </ul>
  );
};

export default ListComponent;
