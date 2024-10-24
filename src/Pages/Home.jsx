import React from 'react';
import Img1 from '../assets/uploads/about_01.jpg';
import Img2 from '../assets/uploads/about_02.jpg';
import Img3 from '../assets/uploads/service_01.jpg';
import Img4 from '../assets/uploads/service_02.jpg';
import Img5 from '../assets/uploads/service_03.jpg';
import Img6 from '../assets/uploads/service_04.jpg';
import Img7 from '../assets/uploads/device_03.png';
import Img8 from '../assets/uploads/ipad.png';
import Img9 from '../assets/uploads/testi_01.png';
import Img10 from '../assets/uploads/testi_02.png';
import Img11 from '../assets/uploads/testi_03.png';
import Img12 from '../assets/uploads/logo_01.png';
import Img13 from '../assets/uploads/logo_02.png';
import Img14 from '../assets/uploads/logo_03.png';
import Img15 from '../assets/uploads/logo_04.png';
import Img16 from '../assets/uploads/logo_05.png';
import Img17 from '../assets/uploads/logo_06.png';
import Img18 from '../assets/images/logos/logo-2.png';

function Home() {
  return (
    <div>
  <div className="slider-area">
    <div className="slider-wrapper owl-carousel">
      <div className="slider-item home-one-slider-otem slider-item-four slider-bg-one">
        <div className="container">
          <div className="row">
            <div className="slider-content-area">
              <div className="slide-text">
                <h1 className="homepage-three-title">Outstanding <span>Installation</span> Services</h1>
                <h2>With GoodWEB Solutions responsive landing page template, <br />you can promote your all web design &amp; development services. </h2>
                <div className="slider-content-btn">
                  <a className="button btn btn-light btn-radius btn-brd" href="#">Read More</a>
                  <a className="button btn btn-light btn-radius btn-brd" href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-item text-center home-one-slider-otem slider-item-four slider-bg-two">
        <div className="container">
          <div className="row">
            <div className="slider-content-area">
              <div className="slide-text">
                <h1 className="homepage-three-title">Outstanding <span>Installation</span> Services</h1>
                <h2>With GoodWEB Solutions responsive landing page template, <br />you can promote your all web design &amp; development services. </h2>
                <div className="slider-content-btn">
                  <a className="button btn btn-light btn-radius btn-brd" href="#">Read More</a>
                  <a className="button btn btn-light btn-radius btn-brd" href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-item home-one-slider-otem slider-item-four slider-bg-three">
        <div className="container">
          <div className="row">
            <div className="slider-content-area">
              <div className="slide-text">
                <h1 className="homepage-three-title">Outstanding <span>Installation</span> Services</h1>
                <h2>With GoodWEB Solutions responsive landing page template, <br />you can promote your all web design &amp; development services.</h2>
                <div className="slider-content-btn">
                  <a className="button btn btn-light btn-radius btn-brd" href="#">Read More</a>
                  <a className="button btn btn-light btn-radius btn-brd" href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="about" className="section wb">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="message-box">
            <h4>About Us</h4>
            <h2>Welcome to GoodWEB Solutions</h2>
            <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
            <a href="#services" className="btn btn-light btn-radius btn-brd grd1">Learn More</a>
          </div>{/* end messagebox */}
        </div>{/* end col */}
        <div className="col-md-6">
          <div className="post-media wow fadeIn">
            <img src={Img1} alt className="img-responsive img-rounded" />
            <a href="http://www.youtube.com/watch?v=nrJtHemSPW4" data-rel="prettyPhoto[gal]" className="playbutton"><i className="flaticon-play-button" /></a>
          </div>{/* end media */}
        </div>{/* end col */}
      </div>{/* end row */}
      <hr className="hr1" /> 
      <div className="row">
        <div className="col-md-6">
          <div className="post-media wow fadeIn">
            <img src={Img2}  alt className="img-responsive img-rounded" />
          </div>{/* end media */}
        </div>{/* end col */}
        <div className="col-md-6">
          <div className="message-box">
            <h4>Who We are</h4>
            <h2>We Are GoodWEB Solutions</h2>
            <p className="lead">Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus dignissim.</p>
            <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed vitae rutrum neque. Ut id erat sit amet libero bibendum aliquam. Donec ac egestas libero, eu bibendum risus. Phasellus et congue justo. </p>
            <a href="#services" className="btn btn-light btn-radius btn-brd grd1">Learn More</a>
          </div>{/* end messagebox */}
        </div>{/* end col */}
      </div>{/* end row */}
    </div>{/* end container */}
  </div>{/* end section */}
  <div className="parallax section parallax-off" data-stellar-background-ratio="0.9" style={{backgroundImage: 'url("uploads/parallax_04.jpg")'}}>
    <div className="container">
      <div className="row text-center stat-wrap">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-briefcase" /></span>
          <p className="stat_count">1200</p>
          <h3>Complated Projects</h3>
        </div>{/* end col */}
        <div className="col-md-3 col-sm-6 col-xs-12">
          <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-happy" /></span>
          <p className="stat_count">3210</p>
          <h3>Happy Clients</h3>
        </div>{/* end col */}
        <div className="col-md-3 col-sm-6 col-xs-12">
          <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-idea" /></span>
          <p className="stat_count">3781</p>
          <h3>Customer Services</h3>
        </div>{/* end col */}
        <div className="col-md-3 col-sm-6 col-xs-12">
          <span data-scroll className="global-radius icon_wrap effect-1"><i className="flaticon-customer-service" /></span>
          <p className="stat_count">4300</p>
          <h3>Answered Questions</h3>
        </div>{/* end col */}
      </div>{/* end row */}
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
            <img src={Img3} alt className="img-responsive img-rounded" />
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
            <img src={Img4} alt className="img-responsive img-rounded" />
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
            <img src={Img5} alt className="img-responsive img-rounded" />
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
            <img src={Img6} alt className="img-responsive img-rounded" />
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
  <div className="parallax section noover" data-stellar-background-ratio="0.7" style={{backgroundImage: 'url("uploads/parallax_05.png")'}}>
    <div className="container">
      <div className="row text-center">
        <div className="col-md-6">
          <div className="customwidget text-left">
            <h1>Beautiful Websites</h1>
            <p>Full access control of the background parallax effects, <br />change your awesome background elements and edit colors from style.css or colors.css</p>
            <ul className="list-inline">
              <li><i className="fa fa-check" /> Custom Sections</li>
              <li><i className="fa fa-check" /> Parallax's</li>
              <li><i className="fa fa-check" /> Icons &amp; PSD</li>
              <li><i className="fa fa-check" /> Limitless Colors</li>
            </ul>{/* end list */}
            <a href="#services" data-scroll className="btn btn-light btn-radius btn-brd">Learn More</a>
          </div>
        </div>{/* end col */}
        <div className="col-md-6">
          <div className="text-center image-center hidden-sm hidden-xs">
            <img src={Img7} alt className="img-responsive wow fadeInUp" />
          </div>
        </div>
      </div>{/* end row */}
    </div>{/* end container */}
  </div>{/* end section */}
  <div id="features" className="section lb">
    <div className="container">
      <div className="section-title text-center">
        <h3>Features &amp; Overviews</h3>
        <p className="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, <br />lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
      </div>{/* end title */}
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="features-left">
            <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s">
              <i className="flaticon-wordpress-logo" />
              <div className="fl-inner">
                <h4>WordPress Installation</h4>
                <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
              </div>
            </li>
            <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
              <i className="flaticon-windows" />
              <div className="fl-inner">
                <h4>Browser Compatible</h4>
                <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
              </div>
            </li>
            <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s">
              <i className="flaticon-price-tag" />
              <div className="fl-inner">
                <h4>eCommerce Ready</h4>
                <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
              </div>
            </li>
            <li className="wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
              <i className="flaticon-new-file" />
              <div className="fl-inner">
                <h4>Easy to Customize</h4>
                <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-4 hidden-xs hidden-sm">
          <img src={Img8} className="img-center img-responsive" alt />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="features-right">
            <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.2s">
              <i className="flaticon-pantone" />
              <div className="fr-inner">
                <h4>Limitless Colors</h4>
                <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
              </div>
            </li>
            <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
              <i className="flaticon-cloud-computing" />
              <div className="fr-inner">
                <h4>Lifetime Update</h4>
                <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
              </div>
            </li>
            <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.4s">
              <i className="flaticon-line-graph" />
              <div className="fr-inner">
                <h4>SEO Friendly</h4>
                <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
              </div>
            </li>
            <li className="wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
              <i className="flaticon-coding" />
              <div className="fr-inner">
                <h4>Simple Clean Code</h4>
                <p>Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. </p>
              </div>
            </li>
          </ul>
        </div>{/* end col */}
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
                <img src={Img9} alt className="img-responsive alignleft" />
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
                <img src={Img10} alt className="img-responsive alignleft" />
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
                <img src={Img11} alt className="img-responsive alignleft" />
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
                <img src={Img9} alt className="img-responsive alignleft" />
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
                <img src={Img10} alt className="img-responsive alignleft" />
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
                <img src={Img11} alt className="img-responsive alignleft" />
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
          <a href="#"><img src={Img12} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img13} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img14} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img15} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img16} alt className="img-repsonsive" /></a>
        </div>
        <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
          <a href="#"><img src={Img17} alt className="img-repsonsive" /></a>
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
              <img src={Img18} alt />
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

export default Home