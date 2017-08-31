import React from 'react';
import { Link } from 'react-router-dom';


const CheckinItem = ({ checkin }) => {
  const starRating = `rating${checkin.rating}`;
  const userLink = <Link to={`/users/${checkin.user_id}`} onClick={ () => window.scroll(0, 0) } ><span id="feedUserLink">{checkin.user}</span></Link>;
  const dessertLink = <Link to={`/desserts/${checkin.dessert_id}`} onClick={ () => window.scroll(0, 0) } ><span id="feedUserLink">{checkin.dessert}</span></Link>;

  return (
  <div className="checkinItem">

      <div className="checkinTitle">
        <div id="titleText">
          <div className="feedUserImgDiv">
            <img id="userFeedAvatar" src={checkin.avatar} />
          </div>
       {userLink} is eating {dessertLink} 
      </div>
        <div className="checkinDesImgDiv">
          <img id="userFeedAvatar" src={checkin.dessert_avatar} />
        </div>
      </div>

    <div className="checkinComment">
      <span>{checkin.comment}</span>
      <span id={starRating}>Rating</span>
    </div>
    <div className="checkinImgDiv">
      <img id="checkinImg" src={checkin.image_url}/>
    </div>
  </div>
);
}
export default CheckinItem
