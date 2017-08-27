import React from 'react';
import { Link } from 'react-router-dom';

const DessertItem = ({ dessert }) => (
  <li className="dessertItem">
    <Link to={`/desserts/${dessert.id}`}>
      <span>{dessert.name}</span>
    
    </Link>
  </li>
);

export default DessertItem;
