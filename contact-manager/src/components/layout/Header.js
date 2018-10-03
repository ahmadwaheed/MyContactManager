import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const {branding} = props;

  return (
    <nav className="navbar navbar-expand-smnavbar-dark bg-danger mb-3 py-0">
      <div className="container">
      <a href="/" className="navbar-brand">{branding}</a>
      <div>
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item">
            <Link to="/" className="nav-link">
            <i className="fas fa-home"></i>Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
            <i className="fas fa-plus"></i>Add</Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
            <i className="fas fa-question"></i>About</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

//setting default props
Header.defaultProps = {
  branding: 'My React App'
};

//checking for prop types
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

//in-line styling
/*
const headingStyle = {
  color: 'purple',
  fontSize: '40px'
};

//within return
<div>
  <h1>{branding}</h1>
</div>
*/
export default Header;
