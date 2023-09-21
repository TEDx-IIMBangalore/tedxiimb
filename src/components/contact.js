import React from 'react';


class Contact extends React.Component{   
    
    render(){
        return (
        <div>

            <section className="contact--us-area section-padding-100-0 contact-section contact-bg">
                <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-6">
                    <div className="contact-us-thumb mb-100">
                        <img src="img/bg-img/44.jpg" alt/>
                    </div>
                    </div>

                    <div className="col-12 col-lg-6">
                    <div className="contact_from_area mb-100 clearfix">

                        <div className="contact-heading">
                        <h4>Contact us</h4>
                        <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                            voluptates repudiandae</p>
                        </div>
                        <div className="contact_form">
                        <form action="" method="post">
                            <div className="contact_input_area">
                            <div className="row">

                                <div className="col-12 col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control mb-30" name="name" id="name" placeholder="Your Name"
                                    required/>
                                </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control mb-30" name="name" id="name-2" placeholder="Last Name"
                                    required/>
                                </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                <div className="form-group">
                                    <input type="email" className="form-control mb-30" name="email" id="email" placeholder="E-mail"
                                    required/>
                                </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                <div className="form-group">
                                    <input type="text" className="form-control mb-30" name="subject" id="subject"
                                    placeholder="Your Number"/>
                                </div>
                                </div>

                                <div className="col-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control mb-30" id="message" cols="30" rows="6"
                                    placeholder="Message" required></textarea>
                                </div>
                                </div>

                                <div className="col-12">
                                <button type="submit" className="btn confer-btn">Send Message <i
                                    className="zmdi zmdi-long-arrow-right"></i></button>
                                </div>
                            </div>
                            </div>
                        </form>
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

            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="contact--info-area bg-boxshadow">
                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-contact--info text-center">

                            <div className="contact--info-icon">
                            <img src="img/core-img/icon-5.png" alt/>
                            </div>
                            <h5>Bannerghatta main road</h5>
                        </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-contact--info text-center">

                            <div className="contact--info-icon">
                            <img src="img/core-img/icon-6.png" alt/>
                            </div>
                            <h5>9876543210</h5>
                        </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-contact--info text-center">

                            <div className="contact--info-icon">
                            <img src="img/core-img/icon-7.png" alt/>
                            </div>
                            <h5><a href="mailto:test@gmail.com" >[email&#160;protected]</a></h5>
                        </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3">
                        <div className="single-contact--info text-center">

                            <div className="contact--info-icon">
                            <img src="img/core-img/icon-8.png" alt/>
                            </div>
                            <h5>www.iimb.ac.in</h5>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
    };
}
export default Contact;