import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'



const DessertItem = ({ dessert }) => (


  <li className="dessertItem">
    <div className="dessertIcons">
    <div className="searchImgDiv">
      <img id="dessertIdxAvatar" src={dessert.avatar_image} />
    </div>
    <div>
      <Link to={`/desserts/${dessert.id}`} id="text1" onClick={ () => window.scroll(0, 0) }><span>{dessert.name}</span></Link>
      <p id='itemInfo'>{dessert.description.slice(0, 30)}...</p>
    </div>
      </div>
      <div className='dessertStats'>
        <div id="dessertStatsTable">
          <table className="dessertTable">
            <tr>
              <th id="left">Total</th>
              <th id="right">Users</th>
            </tr>
            <tr>
              <td id="left" className="topData">{dessert.num_checkins}</td>
              <td id="right" className="topData">{dessert.num_users}</td>
            </tr>
            <tr>
              <th id="left" className="bottom">Unique</th>
              <th id="right" className="bottom">Added</th>
            </tr>
            <tr>
              <td id="left" >{dessert.num_unique_users}</td>
              <td id="right">{dessert.date_created}</td>
            </tr>
          </table>
        </div>
      </div>
  </li>
);

export default DessertItem;
