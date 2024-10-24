import React from 'react';
import Img1 from '../assets/images/logos/logo-2.png';

function Contact() {
  return (
    <div>
  <div className="banner-area banner-bg-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner">
            <h2>Pricing</h2>
            <ul className="page-title-link">
              <li><a href="#">Home</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="contact" className="section wb">
    <div className="container">
      <div className="section-title text-center">
        <h3>Get in touch</h3>
        <p className="lead">Let us give you more details about the special offer website you want us. Please fill out the form below. <br />We have million of website owners who happy to work with us!</p>
      </div>{/* end title */}
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="contact_form">
            <div id="message" />
            <form id="contactform" className="row" action="contact.php" name="contactform" method="post">
              <fieldset className="row-fluid">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <input type="text" name="first_name" id="first_name" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <label className="sr-only">Select Service</label>
                  <select name="select_service" id="select_service" className="selectpicker form-control" data-style="btn-white">
                    <option value={12}>Installation Service</option>
                    <option value="Web Design">Web Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <label className="sr-only">What is max price?</label>
                  <select name="select_price" id="select_price" className="selectpicker form-control" data-style="btn-white">
                    <option value="$100 - $2000">$100 - $2000</option>
                    <option value="$2000 - $4000">$2000 - $4000</option>
                    <option value="$4000 - $10000">$4000 - $10000</option>
                  </select>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <textarea className="form-control" name="comments" id="comments" rows={6} placeholder="Give us more details.." defaultValue={""} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                  <button type="submit" value="SEND" id="submit" className="btn btn-light btn-radius btn-brd grd1 btn-block">Submit</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>{/* end col */}
      </div>{/* end row */}
      <div className="row">
        <div className="col-md-offset-1 col-sm-10 col-md-10 col-sm-offset-1 pd-add">
          <div className="address-item">
            <div className="address-icon">
              <i className="icon icon-location2" />
            </div>
            <h3>Headquarters</h3>
            <p>PO Box 16122 Collins Street West 
              <br /> Victoria 8007 Australia</p>
          </div>
          <div className="address-item">
            <div className="address-icon">
              <i className="fa fa-envelope" aria-hidden="true" />
            </div>
            <h3>Email Us</h3>
            <p>info@yoursite.com
              <br />info@yoursite.com</p>
          </div>
          <div className="address-item">
            <div className="address-icon">
              <i className="icon icon-headphones" />
            </div>
            <h3>Call Us</h3>
            <p>+61 3 8376 6284
              <br />+61 3 8376 6185</p>
          </div>
        </div>
      </div>{/* end row */}
    </div>{/* end container */}
  </div>{/* end section */}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="widget clearfix">
            <div className="widget-title">
              <img src={Img1} alt />
            </div>
            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
            <p>Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
          </div>{/* end clearfix */}
        </div>{/* end col */}
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="widget clearfix">
            <div className="widget-title">
              <h3>Pages</h3>
            </div>
            <ul className="footer-links hov">
              <li><a href="#">Home <span className="icon icon-arrow-right2" /></a></li>
              <li><a href="#">Blog <span className="icon icon-arrow-right2" /></a></li>
              <li><a href="#">Pricing <span className="icon icon-arrow-right2" /></a></li>
              <li><a href="#">About <span className="icon icon-arrow-right2" /></a></li>
              <li><a href="#">Faq <span className="icon icon-arrow-right2" /></a></li>
              <li><a href="#">Contact <span className="icon icon-arrow-right2" /></a></li>
            </ul>{/* end links */}
          </div>{/* end clearfix */}
        </div>{/* end col */}
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="footer-distributed widget clearfix">
            <div className="widget-title">
              <h3>Subscribe</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which one know this tricks.</p>
            </div>
            <div className="footer-right">
              <form method="get" action="#">
                <input placeholder="Subscribe our newsletter.." name="search" />
                <i className="fa fa-envelope-o" />
              </form>
            </div>                        
          </div>{/* end clearfix */}
        </div>{/* end col */}
      </div>{/* end row */}
    </div>{/* end container */}
  </footer>{/* end footer */}
  <div className="copyrights">
    <div className="container">
      <div className="footer-distributed">
        <div className="footer-left">                   
          <p className="footer-company-name">All Rights Reserved. © 2018 <a href="#">GoodWEB</a> Design By : 
            <a href="https://html.design/">html design</a></p>
        </div>
      </div>
    </div>{/* end container */}
  </div>{/* end copyrights */}
  <a href="#" id="scroll-to-top" className="dmtop global-radius"><i className="fa fa-angle-up" /></a>
</div>

  )
}

export default Contact