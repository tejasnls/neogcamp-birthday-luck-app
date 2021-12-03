import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-socials">My Socials</div>
      <ul className="footer-lists">
        <li className="footer-list-inline">
          <a href="https://github.com/tejasnls" className="links">
            Github
          </a>
        </li>
        <li className="footer-list-inline">
          <a href="https://www.linkedin.com/in/tejasnls/" className="links">
            Linkedin
          </a>
        </li>
        <li className="footer-list-inline">
          <a href="https://twitter.com/tejasnls97" className="links">
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
