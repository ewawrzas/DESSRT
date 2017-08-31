import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';



class CheckinItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    debugger
    this.props.deleteCheckin(this.props.checkin);
  }

  render () {

    const { checkin } = this.props

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
              <span id='text'>{userLink} <p>is eating </p> {dessertLink} </span>
            </div>
            <div className="checkinDesImgDiv">
              <img id="userFeedAvatar" src={checkin.dessert_avatar} />
            </div>
          </div>

        <div className="checkinComment">
          <span>{checkin.comment}</span>
          <span id={starRating}></span>
          <span id="checkinCounter">{`${checkin.user} has checked in!`}</span>
        </div>

        <div id="checkinInfo">
          <span id="madeOnDate">{checkin.date_created}</span>
        <button id="deleteCheckin" onClick={this.handleClick}>Delete</button>
        </div>

        <div className="checkinImgDiv">
          <img id="checkinImg" src={checkin.image_url}/>
        </div>
      </div>
    );
  }

}
export default CheckinItem;
