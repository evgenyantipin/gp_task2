import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>
          <Link to={`/service/${item.id}/`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default List;
