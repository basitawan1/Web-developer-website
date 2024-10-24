import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Img1 from '../assets/images/logos/logo.png';

function Layout() {
  return (
    <>
   <div>
  {/* LOADER */}
  {/* <div id="preloader">
    <div className="loader">
      <div className="loader__bar" />
      <div className="loader__bar" />
      <div className="loader__bar" />
      <div className="loader__bar" />
      <div className="loader__bar" />
      <div className="loader__ball" />
    </div>
  </div>end loader */}
  {/* END LOADER */}
  <div className="top-bar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="left-top">
            <div className="email-box">
              <a href="#"><i className="fa fa-envelope-o" aria-hidden="true" /> youremail@gmail.com</a>
            </div>
            <div className="phone-box">
              <a href="tel:1234567890"><i className="fa fa-phone" aria-hidden="true" /> +1 234 567 890</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="right-top">
            <div className="social-box">
              <ul>
                <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true" /></a></li>
                <li><a href="#"><i className="fa fa-rss-square" aria-hidden="true" /></a></li>
                <ul>
                </ul></ul></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header className="header header_style_01">
    <nav className="megamenu navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html"><img src={Img1} alt="image" /></a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">

            <li><Link to="/"  className="active">Home</Link></li>


            <li><Link to="/about">About us</Link></li>

            
            <li><Link to="/services">Our Services</Link></li>

            
            <li><Link to="/features">Features</Link></li>
            
           
            <li><Link to="/testimonials">Testimonials</Link></li>

            
            <li><Link to="/pricing">Pricing</Link></li>

            
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      

    </nav>
  </header>
  <Outlet />
</div>


    
    </>
  )
}

export default Layout