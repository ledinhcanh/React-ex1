import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
              <a className="nav-item nav-link active" href="/#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="/#">Tin tức</a>
          </div>
      </nav>
    );
  }
}

export default Header;
