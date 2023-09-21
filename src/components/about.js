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
                        <div className="row justify-content-center">

                            <div className="col-12 col-lg-8 col-xl-9">
                                <div className="pr-lg-4 mb-100">

                                    <div className="post-details-content">

                                    <div className="post-blog-thumbnail mb-30">
                                    <img src="img/bg-img/46.jpg" alt/>
                                    </div>

            

                                    <p>BW Education Leadership Summit focuses on recognizing applauding the quality of education in India by uniting Institution leaders and regulators to explore how they can leverage technologies, strategies and Management tools with each other to help create a world className Institution. Bringing together the Gamut of Early Childhood Brands, K 12 Brands, Exceptional Schools, Engineering Colleges.</p>

                                    <blockquote className="confer-blockquote">
                                    <h5>Colleges together, this pivotal event will feature high level dialogue and strategies as well as be a Platform to recognize and celebrate the Top Education Brands in the Country.</h5>
                                    </blockquote>
                                    <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe</p>
                                    <div className="row">
                                    <div className="col-6">
                                    <img className="mb-30" src="img/bg-img/51.jpg" alt/>
                                    </div>
                                    <div className="col-6">
                                    <img className="mb-30" src="img/bg-img/52.jpg" alt/>
                                    </div>
                                    </div>
                                    <h5>Marketing Analytics &amp; Insights Summit</h5>
                                    <p>Beyond demonstrating that marketing really works, the right analytics strategies can provide insights that inspire impactful marketing decisions, leading to increased ROI and revenue growth. Join us for our Marketing Analytics &amp; Insights Summit for a two-day deep dive into how top companies are using big data and analytics to dramatically improve the efficiency and efficacy of their marketing mix.</p>
                                    </div>






                                </div>
                            </div>


                        </div>
                    </div>
                
            </section>

            <div className="map-area">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8521.851236327686!2d-74.6724533513314!3d40.961125464236446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c371b215154515%3A0xb2dc3766c77b480b!2sHopatcong%2C+NJ%2C+USA!5e0!3m2!1sen!2sbd!4v1552471083596"
                allowfullscreen></iframe>
            </div>

            


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




            
        </div>
        )
    };
}
export default About;