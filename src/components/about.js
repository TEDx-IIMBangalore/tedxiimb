import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


class About extends React.Component{   

    options = {
        loop: true,
        center: false,
        items: 2,
        margin: 0,
        autoplay: true,
        dots: false,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        margin: 40,
    };
    
    render(){
        return (
        <div>

<section className="about-us-countdown-area section-padding-100-0 about-section" id="about">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-12 col-md-6">
                        <div className="about-content-text mb-80">
                            <h6 className="wow fadeInUp" data-wow-delay="300ms">About Conference</h6>
                            <h3 className="wow fadeInUp" data-wow-delay="300ms">Welcome to the Project Management</h3>
                            <p className="wow fadeInUp" data-wow-delay="300ms">The Project Management is a platform to learn expert
                            techniques for building successful project teams, creating efficient plans and implementing effective
                            tracking measures to ensure your projects come in on deadline and on budget. In one fast-paced,
                            well-designed day, we’ll cover all the essential elements of project management.</p>
                            <a href="#" className="btn confer-btn mt-50 wow fadeInUp" data-wow-delay="300ms">Interested <i
                                className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                        </div>

                        <div className="col-12 col-md-6">
                        <div className="about-thumb mb-80 wow fadeInUp" data-wow-delay="300ms">
                            <img src="img/bg-img/2.png" alt />
                        </div>
                        </div>
                    </div>
                </div>

               
            </section>
            


            <section className="what-we-offer-area section-padding-100-70">
                <div className="container">
                <div className="row">

                    <div className="col-12">
                    <div className="section-heading-3 text-center wow fadeInUp" data-wow-delay="300ms">
                        <p>Summit Meeting</p>
                        <h4>What We Offer</h4>
                    </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-12 col-md-6 col-xl-3">
                    <div className="single-we-offer-content text-center wow fadeInUp" data-wow-delay="0.3s">

                        <div className="offer-icon">
                        <img src="img/core-img/icon.png" alt />
                        </div>
                        <h5>Conference</h5>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque</p>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-3">
                    <div className="single-we-offer-content text-center wow fadeInUp" data-wow-delay="0.3s">

                        <div className="offer-icon">
                        <img src="img/core-img/icon-2.png" alt />
                        </div>
                        <h5>Workshops</h5>
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum</p>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-3">
                    <div className="single-we-offer-content text-center wow fadeInUp" data-wow-delay="0.3s">

                        <div className="offer-icon">
                        <img src="img/core-img/icon-3.png" alt />
                        </div>
                        <h5>Coffee Breaks</h5>
                        <p>On the other hand, we denounce with righteous indignation</p>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-3">
                    <div className="single-we-offer-content text-center wow fadeInUp" data-wow-delay="0.3s">

                        <div className="offer-icon">
                        <img src="img/core-img/icon-4.png" alt />
                        </div>
                        <h5>Events</h5>
                        <p>These cases are perfectly simple and easy to distinguish in a free hour</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            


            <div className="our-gallery-area section-padding-0-85">
                <div className="container-fluid">
                <div className="row">

                    <div className="col-12 col-sm-3">
                    <div className="single-gallery-thumb wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/bg-img/28.jpg" alt />
                    </div>
                    </div>

                    <div className="col-12 col-sm-3">
                    <div className="single-gallery-thumb wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/bg-img/29.jpg" alt />
                    </div>
                    </div>

                    <div className="col-12 col-sm-6">
                    <div className="single-gallery-thumb wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/bg-img/30.jpg" alt />
                    </div>
                    </div>

                    <div className="col-12 col-sm-6">
                    <div className="single-gallery-thumb wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/bg-img/31.jpg" alt />
                    </div>
                    </div>

                    <div className="col-12 col-sm-3">
                    <div className="single-gallery-thumb wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/bg-img/32.jpg" alt />
                    </div>
                    </div>

                    <div className="col-12 col-sm-3">
                    <div className="single-gallery-thumb wow fadeInUp" data-wow-delay="300ms">
                        <img src="img/bg-img/33.jpg" alt />
                    </div>
                    </div>
                </div>
                </div>
            </div>


            <div className="our-client-area about-page section-padding-0-100">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                        <div className="section-heading-3 text-center wow fadeInUp" data-wow-delay="300ms">
                            <p>WHAT CLIENTS SAY</p>
                            <h4>Testimonials</h4>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">

                        <OwlCarousel className='client-area owl-carousel' {...this.options}>

                            <div className="single-client-content bg-boxshadow wow fadeInUp" data-wow-delay="300ms">
                                <div className="single-client-text about-page">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                    <div className="single-client-thumb-info d-flex align-items-center">

                                    <div className="single-client-thumb">
                                        <img src="img/bg-img/15.jpg" alt />
                                    </div>

                                    <div className="client-info">
                                        <h6>Maria Hernandez</h6>
                                        <p>UX Manager</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="client-icon">
                                    <i className="zmdi zmdi-quote"></i>
                                </div>
                                </div>

                                <div className="single-client-content bg-boxshadow wow fadeInUp" data-wow-delay="300ms">
                                <div className="single-client-text about-page">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                    <div className="single-client-thumb-info d-flex align-items-center">

                                    <div className="single-client-thumb">
                                        <img src="img/bg-img/16.jpg" alt />
                                    </div>

                                    <div className="client-info">
                                        <h6>Jacqueline Myers</h6>
                                        <p>UX Manager</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="client-icon">
                                    <i className="zmdi zmdi-quote"></i>
                                </div>
                                </div>

                                <div className="single-client-content bg-boxshadow wow fadeInUp" data-wow-delay="300ms">
                                <div className="single-client-text about-page">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                                    <div className="single-client-thumb-info d-flex align-items-center">

                                    <div className="single-client-thumb">
                                        <img src="img/bg-img/15.jpg" alt />
                                    </div>

                                    <div className="client-info">
                                        <h6>Maria Hernandez</h6>
                                        <p>UX Manager</p>
                                    </div>
                                    </div>
                                </div>

                                <div className="client-icon">
                                    <i className="zmdi zmdi-quote"></i>
                                </div>
                                </div>
                            </OwlCarousel>

            
                        </div>
                    </div>
                </div>
                {/* <div className="countdown-up-area">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-12 col-md-3">

                            <div className="countdown-content-text mb-100 wow fadeInUp" data-wow-delay="300ms">
                            <h6>Conference Date</h6>
                            <h4>Count Every Second Until the Event</h4>
                            </div>
                        </div>
                        <div className="col-12 col-md-9">
                            <div className="countdown-timer mb-100 wow fadeInUp" data-wow-delay="300ms">
                            <div id="clock"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
        )
    };
}
export default About;