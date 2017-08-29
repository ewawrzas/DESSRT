import React from 'react';
import { Link } from 'react-router-dom';


const CheckinItem = ({ checkin }) => {
  const starRating = `rating${checkin.rating}`;
  const userLink = <Link to={`/users/${checkin.user_id}`}><span id="feedUserLink">{checkin.user}</span></Link>;
  const dessertLink = <Link to={`/desserts/${checkin.dessert_id}`}><span id="feedUserLink">{checkin.dessert}</span></Link>;
debugger
  return (
  <div className="checkinItem">
  <span id="checkinTitle">{userLink} is eating {dessertLink}</span>
    <div className="checkinComment">
      <span>{checkin.comment}</span>
      <span id={starRating}>Rating</span>
    </div>
    <img id="checkinImg" src={checkin.image_url}/>
  </div>
);
}
export default CheckinItem
