import React from 'react';
import { Link } from 'react-router-dom';

const CheckinItem = ({ checkins }) => (
  <li className="checkinIndexItem">
    <span>{checkin.user}</span>
    <span>{checkin.dessert}</span>
    <span>{checkin.comment}</span>
    <span>{checkin.rating}</span>
    <img src={checkin.image_url}/>
  </li>
);

export default CheckinItem
