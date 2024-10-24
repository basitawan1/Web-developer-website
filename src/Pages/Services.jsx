import React from 'react';
import Img1 from '../assets/uploads/service_01.jpg';
import Img2 from '../assets/uploads/service_02.jpg';
import Img3 from '../assets/uploads/service_03.jpg';
import Img4 from '../assets/uploads/service_04.jpg';
import Img5 from '../assets/uploads/testi_01.png';
import Img6 from '../assets/uploads/testi_02.png';
import Img7 from '../assets/uploads/testi_03.png';
import Img8 from '../assets/uploads/logo_01.png';
import Img9 from '../assets/uploads/logo_02.png';
import Img10 from '../assets/uploads/logo_03.png';
import Img11 from '../assets/uploads/logo_04.png';
import Img12 from '../assets/uploads/logo_05.png';
import Img13 from '../assets/uploads/logo_06.png';
import Img14 from '../assets/images/logos/logo-2.png';

function Services() {
  return (
    
    <div>
  <div className="banner-area banner-bg-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="banner">
            <h2>Our Services</h2>
            <ul className="page-title-link">
              <li><a href="#">Home</a></li>
              <li><a href="#">Our Services</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="about" className="section wb">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-3 col-sm-6">
          <div className="about-item">
            <div className="about-icon">
              <span className="icon icon-display" />
            </div>
            <div className="about-text">
              <h3> <a href="#">Lorem ipsum dolor. </a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-item">
            <div className="about-icon">
              <span className="icon icon-database" />
            </div>
            <div className="about-text">
              <h3> <a href="#">Lorem ipsum dolor. </a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-item">
            <div className="about-icon">
              <span className="icon icon-magic-wand" />
            </div>
            <div className="about-text">
              <h3> <a href="#">Lorem ipsum dolor. </a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="about-item">
            <div className="about-icon">
              <span className="icon icon-cloud" />
            </div>
            <div className="about-text">
              <h3> <a href="#">Lorem ipsum dolor. </a></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea, quis magnam deserunt. </p>
            </div>
          </div>
        </div>
      </div>
    </div>{/* end container */}
  </div>{/* end section */}
  <div id="services" className="parallax section lb">
    <div className="container">
      <div className="section-title text-center">
        <h3>Our Service</h3>
        <p className="lead">Our Service unlimited solutions to all your business needs. in the installation package we prepare search engine optimization, social media support, we provide corporate identity and graphic design services.</p>
      </div>{/* end title */}
      <div className="owl-services owl-carousel owl-theme">
        <div className="service-widget">
          <div className="post-media wow fadeIn">
            <a href="uploads/service_01.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
            <img src={Img1} alt className="img-responsive img-rounded" />
          </div>
          <div className="service-dit">
            <h3>Smart Swatch Editions</h3>
            <p>Aliquam sagittis ligula et sem lacinia, ut facilisis enim sollicitudin. Proin nisi est, convallis nec purus vitae, iaculis posuere sapien. Cum sociis natoque.</p>
          </div>
        </div>
        {/* end service */}
        <div className="service-widget">
          <div className="post-media wow fadeIn">
            <a href="uploads/service_02.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
            <img src={Img2} alt className="img-responsive img-rounded" />
          </div>
          <div className="service-dit">
            <h3>Web UI Kit Design</h3>
            <p>Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor. </p>
          </div>
        </div>
        {/* end service */}
        <div className="service-widget">
          <div className="post-media wow fadeIn">
            <a href="uploads/service_03.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
            <img src={Img3} alt className="img-responsive img-rounded" />
          </div>
          <div className="service-dit">
            <h3>Mobile Optimization</h3>
            <p>Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis accumsan.</p>
          </div>
        </div>
        {/* end service */}
        <div className="service-widget">
          <div className="post-media wow fadeIn">
            <a href="uploads/service_04.jpg" data-rel="prettyPhoto[gal]" className="hoverbutton global-radius"><i className="flaticon-unlink" /></a>
            <img src={Img4} alt className="img-responsive img-rounded" />
          </div>
          <div className="service-dit">
            <h3>Digital Design for Mac</h3>
            <p>Praesent in neque congue sapien lobortis faucibus id eget erat. <br />Pellentesque maximus rutrum felis. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
        </div>
        {/* end service */}
      </div>{/* end row */}
      <hr className="hr1" />
      <div className="text-center">
        <a data-scroll href="#portfolio" className="btn btn-light btn-radius btn-brd">View Our Portfolio</a>
      </div>
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
                <img src={Img5} alt className="img-responsive alignleft" />
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
                <img src={Img6} alt className="img-responsive alignleft" />
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
                <img src={Img7} alt className="img-responsive alignleft" />
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
                <img src={Img5} alt className="img-responsive alignleft" />
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
                <img src={Img6} alt className="img-responsive alignleft" />
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
                <img src={Img7} alt className="img-responsive alignleft" />
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
          <a href="#"><img src={Img8} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img9} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img10} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img11} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img12} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img13} alt className="img-repsonsive" /></a>
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
              <img src={Img14} alt />
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

export default Services