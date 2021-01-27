import React from 'react';
import './list.css';

const ListComponent: React.FunctionComponent<any> = (props: any) => {
  const { data, onItemSelected, children: renderListItem } = props;

  const list = !data ? '' : data.map((item: any) => {
    const { id } = item;
    const renderedItem = renderListItem(item);

    return (
      <li
        key={id}
        onClick={() => onItemSelected(id)}
        role="link"
        tabIndex={id}
        className="collection-item hoverable row"
      >
        {renderedItem}
      </li>
    );
  });

  return (
    <ul className="collection">
      {list}
    </ul>
  );
};

export default ListComponent;
