import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import Countdown from 'react-countdown';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    options = {
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: false,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
    };
    renderer = ({ days,hours, minutes, seconds }) => {
 {
          // Render a countdown
          return <div id="clock"><div>{days} <span>Days</span></div> <div>{hours}<span>Hours</span></div> <div>{minutes} <span>Minutes</span></div> <div>{seconds} <span>Seconds</span></div></div>
         
        }
      };
    render(){
        return (
           <div>
                <section className="welcome-area">
                    <OwlCarousel className='welcome-slides owl-carousel' {...this.options}>
                        <div className='single-welcome-slide bg-img bg-overlay jarallax' style={{'backgroundImage': "url('img/bg-img/1.jpg')"}}>
                            <div className="container h-100">
                                <div className="row h-100 align-items-center">

                                    <div className="col-12">
                                        <div className="welcome-text text-right">
                                            <h2 data-animation="fadeInUp" data-delay="300ms">TED<span className='x-factor'>x</span></h2>
                                            <h3 data-animation="fadeInUp" data-delay="300ms">IIM Bangalore</h3>
                                            <h6 data-animation="fadeInUp" data-delay="500ms">Theme of this year</h6>
                                            <div className="hero-btn-group" data-animation="fadeInUp" data-delay="700ms">
                                               
                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='single-welcome-slide bg-img bg-overlay jarallax' style={{'backgroundImage': "url('img/bg-img/45.jpg')"}}>
                        <div className="container h-100">
                                <div className="row h-100 align-items-center">

                                    <div className="col-12">
                                        <div className="welcome-text-two text-center">
                                            <h5 data-animation="fadeInUp" data-delay="100ms">The event consistently</h5>
                                            <h2 data-animation="fadeInUp" data-delay="300ms">OSHA Compliance</h2>

                                            <div className="event-meta" data-animation="fadeInUp" data-delay="500ms">
                                                <a className="event-date" href="/#"><i className="zmdi zmdi-account"></i> January 14,
                                                    2019</a>
                                                <a className="event-author" href="/#"><i className="zmdi zmdi-alarm-check"></i> Laura
                                                    Green</a>
                                            </div>
                                            <div className="hero-btn-group" data-animation="fadeInUp" data-delay="700ms">
                                                <a href="/#" className="btn confer-btn m-2">View more <i
                                                        className="zmdi zmdi-long-arrow-right"></i></a>
                                                <a href="/#" className="btn confer-btn m-2">Get Tickets <i
                                                        className="zmdi zmdi-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        
                    </OwlCarousel>

                        
                    

                    <div className="icon-scroll" id="scrollDown"></div>
                </section>


                <section className="about-us-countdown-area section-padding-100-0" id="about">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-12 col-md-6">
                                <div className="about-content-text mb-80">
                                    <h6 className="wow fadeInUp" data-wow-delay="300ms">TEDx IIM Bangalore</h6>
                                    <h3 className="wow fadeInUp" data-wow-delay="300ms">Theme of this year</h3>
                                    <p className="wow fadeInUp" data-wow-delay="300ms">After a hiatus, we are back, bigger and better! stay tuned for updates! talk about the theme of this yearr</p>
                                    <a href="/about" className="btn confer-btn mt-50 wow fadeInUp" data-wow-delay="300ms">Learn more <i
                                            className="zmdi zmdi-long-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="about-thumb mb-80 wow fadeInUp" data-wow-delay="300ms">
                                    <img src="img/bg-img/2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </section>


                <section className="our-speaker-area bg-img bg-gradient-overlay section-padding-100-60"
                    style={{'backgroundImage': "url('img/bg-img/3.jpg')"}}>
                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                                    <p>Our Speakings</p>
                                    <h4>Who’s speaking</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">

                                    <div className="speaker-single-thumb">
                                        <img src="img/bg-img/4.jpg" alt=""/>
                                    </div>

                                    <div className="social-info">
                                        <a href="/#"><i className="zmdi zmdi-facebook"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-instagram"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-twitter"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-linkedin"></i></a>
                                    </div>

                                    <div className="speaker-info">
                                        <h5>Albert Barnes</h5>
                                        <p>Founder</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">

                                    <div className="speaker-single-thumb">
                                        <img src="img/bg-img/5.jpg" alt=""/>
                                    </div>

                                    <div className="social-info">
                                        <a href="/#"><i className="zmdi zmdi-facebook"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-instagram"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-twitter"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-linkedin"></i></a>
                                    </div>

                                    <div className="speaker-info">
                                        <h5>Patricia Stanley</h5>
                                        <p>Product Lead</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-speaker-area bg-gradient-overlay-2 wow fadeInUp" data-wow-delay="300ms">

                                    <div className="speaker-single-thumb">
                                        <img src="img/bg-img/6.jpg" alt=""/>
                                    </div>

                                    <div className="social-info">
                                        <a href="/#"><i className="zmdi zmdi-facebook"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-instagram"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-twitter"></i></a>
                                        <a href="/#"><i className="zmdi zmdi-linkedin"></i></a>
                                    </div>

                                    <div className="speaker-info">
                                        <h5>Evelyn Stone</h5>
                                        <p>Photographer</p>
                                    </div>
                                </div>
                            </div>

  


                            <div className="col-12">
                                <div className="more-speaker-btn text-center mt-20 mb-40 wow fadeInUp" data-wow-delay="300ms">
                                   <Link to="/speakers" className="btn confer-btn-white"> <a >view all Speaker <i
                                            className="zmdi zmdi-long-arrow-right"></i></a> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="what-we-offer-area section-padding-100-70">
            <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-lg-8 col-xl-9">
                                <div className="pr-lg-4 mb-100">

                                    <div className="post-details-content">
                                    <div className="row">
                                    <div className="col-6">
                                    <img className="mb-30" src="img/bg-img/51.jpg" alt/>
                                    </div>
                                    <div className="col-6">
                                    <img className="mb-30" src="img/bg-img/52.jpg" alt/>
                                    </div>
                                    </div>

                                    <blockquote className="confer-blockquote">
                                    <h5>aboute TED and TEDX</h5>
                                    </blockquote>
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>
 
                                    <h5>Marketing Analytics &amp; Insights Summit</h5>
                                    <p>Beyond demonstrating that marketing really works, the right analytics strategies can provide insights that inspire impactful marketing decisions, leading to increased ROI and revenue growth. Join us for our Marketing Analytics &amp; Insights Summit for a two-day deep dive into how top companies are using big data and analytics to dramatically improve the efficiency and efficacy of their marketing mix.</p>
                                    </div>






                                </div>
                            </div>


                        </div>
                    </div>
                
            </section>




                

{/* 
                <section className="our-blog-area bg-img bg-gradient-overlay section-padding-100-60"
                    style={{'backgroundImage': "url('img/bg-img/17.jpg')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">

                                <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                                    <p>Our Blog</p>
                                    <h4>Latest news</h4>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">

                                    <div className="single-blog-thumb">
                                        <img src="img/bg-img/18.jpg" alt=""/>
                                    </div>
                                    <div className="single-blog-text text-center">
                                        <a className="blog-title" href="/#">Street Food Convention</a>

                                        <div className="post-meta">
                                            <a className="post-date" href="/#"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                                            <a className="post-author" href="/#"><i className="zmdi zmdi-account"></i> Laura Green</a>
                                        </div>
                                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street
                                            food.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a href="/#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">

                                    <div className="single-blog-thumb">
                                        <img src="img/bg-img/19.jpg" alt=""/>
                                    </div>
                                    <div className="single-blog-text text-center">
                                        <a className="blog-title" href="/#">Tedx Moscow Conference</a>

                                        <div className="post-meta">
                                            <a className="post-date" href="/#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                            <a className="post-author" href="/#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                        </div>
                                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street
                                            food.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a href="/#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="single-blog-area wow fadeInUp" data-wow-delay="300ms">

                                    <div className="single-blog-thumb">
                                        <img src="img/bg-img/20.jpg" alt=""/>
                                    </div>
                                    <div className="single-blog-text text-center">
                                        <a className="blog-title" href="/#">Los Angeles Institute</a>

                                        <div className="post-meta">
                                            <a className="post-date" href="/#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                                            <a className="post-author" href="/#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                                        </div>
                                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street
                                            food.</p>
                                    </div>
                                    <div className="blog-btn">
                                        <a href="/#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}


                   
            </div>
        )
    }
}

export default Home;