import React from 'react';
import { Link } from 'react-router-dom';


const CheckinItem = ({ checkin }) => {
  const starRating = `rating${checkin.rating}`
  return (
  <div className="checkinItem">
    <span id="checkinTitle">{`${checkin.user} is eating ${checkin.dessert}`}</span>
    <div className="checkinComment">
      <span>{checkin.comment}</span>
      <span id={starRating}>Rating</span>
    </div>
    <img id="checkinImg" src={checkin.image_url}/>
  </div>
);
}
export default CheckinItem
