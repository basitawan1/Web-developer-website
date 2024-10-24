import React from 'react';
import Img1 from '../assets/uploads/logo_01.png';
import Img2 from '../assets/uploads/logo_02.png';
import Img3 from '../assets/uploads/logo_03.png';
import Img4 from '../assets/uploads/logo_04.png';
import Img5 from '../assets/uploads/logo_05.png';
import Img6 from '../assets/uploads/logo_06.png';
import Img7 from '../assets/uploads/testi_01.png';
import Img8 from '../assets/uploads/testi_02.png';
import Img9 from '../assets/uploads/testi_03.png';
import Img10 from '../assets/images/logos/logo-2.png';


function Pricing() {
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
  <div id="about" className="section wb">
    <div className="container">
      <div className="section-title text-center">
        <h3>Pricing</h3>
        <p className="lead">We thanks for all our awesome testimonials! There are hundreds of our happy customers! <br />Let's see what others say about GoodWEB Solutions website template!</p>
      </div>{/* end title */}
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="pricingTable">
            <div className="pricingTable-header">
              <h3 className="title">Standard</h3>
              <span className="sub-title">Lorem ipsum</span>
              <span className="year">Pay only <br />$110/year</span>
            </div>
            <div className="price-value">
              <div className="value">
                <span className="currency">$</span>
                <span className="amount">10.<span>99</span></span>
                <span className="month">/month</span>
              </div>
            </div>
            <ul className="pricing-content">
              <li>50GB Disk Space</li>
              <li>50 Email Accounts</li>
              <li>50GB Monthly Bandwidth</li>
              <li className="disable">10 Subdomains</li>
              <li className="disable">15 Domains</li>
            </ul>
            <a href="#" className="pricingTable-signup">Select the plan </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="pricingTable purple">
            <div className="pricingTable-header">
              <h3 className="title">Business</h3>
              <span className="sub-title">Lorem ipsum</span>
              <span className="year">Pay only <br />$220/year</span>
            </div>
            <div className="price-value">
              <div className="value">
                <span className="currency">$</span>
                <span className="amount">20.<span>99</span></span>
                <span className="month">/month</span>
              </div>
            </div>
            <ul className="pricing-content">
              <li>60GB Disk Space</li>
              <li>60 Email Accounts</li>
              <li>60GB Monthly Bandwidth</li>
              <li>15 Subdomains</li>
              <li className="disable">20 Domains</li>
            </ul>
            <a href="#" className="pricingTable-signup">Select the plan </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="pricingTable blue">
            <div className="pricingTable-header">
              <h3 className="title">Premium</h3>
              <span className="sub-title">Lorem ipsum</span>
              <span className="year">Pay only <br />$330/year</span>
            </div>
            <div className="price-value">
              <div className="value">
                <span className="currency">$</span>
                <span className="amount">30.<span>99</span></span>
                <span className="month">/month</span>
              </div>
            </div>
            <ul className="pricing-content">
              <li>70GB Disk Space</li>
              <li>70 Email Accounts</li>
              <li>70GB Monthly Bandwidth</li>
              <li>20 Subdomains</li>
              <li>25 Domains</li>
            </ul>
            <a href="#" className="pricingTable-signup">Select the plan </a>
          </div>
        </div>
      </div>{/* end row */}
    </div>{/* end container */}
  </div>{/* end section */}
  <div id="testimonials" className="parallax section db parallax-off" style={{backgroundImage: 'url("uploads/parallax_03.jpg")'}}>
    <div className="container">
      <div className="section-title text-center">
        <h3>Testimonials</h3>
        <p className="lead">We thanks for all our awesome testimonials! There are hundreds of our happy customers! <br />Let's see what others say about GoodWEB Solutions website template!</p>
      </div>{/* end title */}
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="testi-carousel owl-carousel owl-theme">
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> Wonderful Support!</h3>
                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
              </div>
              <div className="testi-meta">
                <img src={Img7} alt className="img-responsive alignleft" />
                <h4>James Fernando <small>- Manager of Racer</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> Awesome Services!</h3>
                <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
              </div>
              <div className="testi-meta">
                <img src={Img8} alt className="img-responsive alignleft" />
                <h4>Jacques Philips <small>- Designer</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> Great &amp; Talented Team!</h3>
                <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
              </div>
              <div className="testi-meta">
                <img src={Img9} alt className="img-responsive alignleft" />
                <h4>Venanda Mercy <small>- Newyork City</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> Wonderful Support!</h3>
                <p className="lead">They have got my project on time with the competition with a sed highly skilled, and experienced &amp; professional team.</p>
              </div>
              <div className="testi-meta">
                <img src={Img7} alt className="img-responsive alignleft" />
                <h4>James Fernando <small>- Manager of Racer</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> Awesome Services!</h3>
                <p className="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
              </div>
              <div className="testi-meta">
                <img src={Img8} alt className="img-responsive alignleft" />
                <h4>Jacques Philips <small>- Designer</small></h4>
              </div>
              {/* end testi-meta */}
            </div>
            {/* end testimonial */}
            <div className="testimonial clearfix">
              <div className="desc">
                <h3><i className="fa fa-quote-left" /> Great &amp; Talented Team!</h3>
                <p className="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
              </div>
              <div className="testi-meta">
                <img src={Img9} alt className="img-responsive alignleft" />
                <h4>Venanda Mercy <small>- Newyork City</small></h4>
              </div>
              {/* end testi-meta */}
            </div>{/* end testimonial */}
          </div>{/* end carousel */}
        </div>{/* end col */}
      </div>{/* end row */}
      <hr className="hr1" />
      <div className="row logos">
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img1} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img2} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img3} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img4} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img5} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img6} alt className="img-repsonsive" /></a>
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
              <img src={Img10} alt />
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

export default Pricing