import React from 'react';
import {Link, NavLink} from "react-router-dom";
var data = require('./blogContent.json')



class Library extends React.Component{   
    
    render(){
        //TODO: add data loading from the json file
        return (
            <div className="our-blog-area section-padding-100">
                <div className="container">
                <div className="row">

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/18.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <Link to="/blog/lead-summit"><a className="blog-title">Street Food Convention</a></Link>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i> Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <Link to="/blog/lead-summit"><i className="zmdi zmdi-long-arrow-right"></i></Link>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/19.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <a className="blog-title" href="#">Tedx Moscow Conference</a>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <a href="#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/20.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <a className="blog-title" href="#">Los Angeles Institute</a>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <a href="#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/18.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <a className="blog-title" href="#">Street Food Convention</a>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i> Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <a href="#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/19.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <a className="blog-title" href="#">Tedx Moscow Conference</a>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <a href="#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/20.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <a className="blog-title" href="#">Los Angeles Institute</a>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <a href="#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/18.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <a className="blog-title" href="#">Street Food Convention</a>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i> January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i> Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <a href="#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/19.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <a className="blog-title" href="#">Tedx Moscow Conference</a>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <a href="#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-4">
                    <div className="single-blog-area style-2 wow fadeInUp" data-wow-delay="300ms">

                        <div className="single-blog-thumb">
                        <img src="img/bg-img/20.jpg" alt/>
                        </div>
                        <div className="single-blog-text text-center">
                        <a className="blog-title" href="#">Los Angeles Institute</a>

                        <div className="post-meta">
                            <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i>January 14, 2019</a>
                            <a className="post-author" href="#"><i className="zmdi zmdi-account"></i>Laura Green</a>
                        </div>
                        <p>Street Food Convention will showcase products like Packed food, beef and lamb, street food.</p>
                        </div>
                        <div className="blog-btn">
                        <a href="#"><i className="zmdi zmdi-long-arrow-right"></i></a>
                        </div>
                    </div>
                    </div>
                </div>

                </div>
            </div>
        )
    };
}
export default Library;