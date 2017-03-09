import React from 'react';
import {ReactRouter, Link} from 'react-router';

var HeaderNav = React.createClass({
  render() {
      return (
        <nav className="header__nav nav">
          <Link to="/home" className="nav__item" activeClassName="v-link-active">Following</Link>
          <Link to="/app" query={{show: "all"}} className="nav__item" activeClassName="v-link-active">Topics</Link>
          <Link to="/chong" className="nav__item" activeClassName="v-link-active">Cafes</Link>
        </nav>
      );
  }
});

module.exports = HeaderNav;
