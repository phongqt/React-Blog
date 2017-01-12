import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {

  render() {
    const divStyle = {
      backgroundImage: 'url(img/home-bg.jpg)'
    };
    return (
      <div>
          <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header page-scroll">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <a href="index.html">Home</a>
                          </li>
                          <li>
                              <a href="about.html">About</a>
                          </li>
                          <li>
                              <a href="post.html">Sample Post</a>
                          </li>
                          <li>
                              <a href="contact.html">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <header className="intro-header" style={divStyle}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <hr className="small" />
                                <span className="subheading">A Clean Blog Theme by Start Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
      </div>
      )
    }
}
export default Header;
