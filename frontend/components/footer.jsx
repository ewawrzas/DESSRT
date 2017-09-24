import React from 'react';

const Footer = () => {

  return (
    <div className="footer">
      <p>©Ellie Wawrzaszek 2017</p>
      <ul className="footerLinks">
  			<li><a href="http://www.linkedin.com/in/ellie-wawrzaszek/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
  			<li><a href="http://github.com/ewawrzas" className="icon fa-github"><span className="label">Github</span></a></li>
  			<li><a href="http://angel.co/ellie-wawrzaszek" className="icon fa-angellist"><span className="label">AngelList</span></a></li>
  		</ul>
    </div>
  )
}

export default Footer;
