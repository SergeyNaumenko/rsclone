import React from 'react';

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = !data? '' : data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
          key={id}
          >
        {label}
      </li>
    );
  });

  return (
    <ul>
      {items}
    </ul>
  );
};

export default ItemList;
