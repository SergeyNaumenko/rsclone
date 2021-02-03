import React,{useState} from 'react';
import withUser from '../hoc/withUser';
import Spinner from '../spinner/spinner';
import './list.css';

const ListComponent: React.FunctionComponent<any> = (props: any) => {
  const { data, onItemSelected, children: renderListItem, history,prop} = props;
  
  const list = !data ? '' : data.map((item: any) => {
    const { id } = item;
    const renderedItem = renderListItem(item,prop);
    return (
      <li
        key={id}
        onClick={() => onItemSelected(item, history)}
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

export default withUser(ListComponent);
