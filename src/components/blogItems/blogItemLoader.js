import React from 'react';
import { Redirect } from "react-router-dom";
var data = require('./blogContent.json')




class ItemLoader extends React.Component{   

    
    
    render(){
        const slug = this.props.slug
        var blogData = {};
        var found = false;
        for (var i = 0; i < data.length; i++)
            {
             if(data[i].slug == slug)   {
                blogData = data[i]
                found=true;
             }
            }

        return (
            <div>
                { found? "" :<Redirect to={{pathname: "/blog"}}/>}
                <section className="confer-blog-details-area section-padding-100-0">
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-12 col-lg-8 col-xl-9">
                                <div className="pr-lg-4 mb-100">

                                    <div className="post-details-content">

                                    <div className="post-blog-thumbnail mb-30">
                                    <img src="img/bg-img/46.jpg" alt/>
                                    </div>

                                    <h4 className="post-title">{blogData.title}</h4>

                                    <div className="post-meta">
                                    <a className="post-date" href="#"><i className="zmdi zmdi-alarm-check"></i>{blogData.date}</a>
                                    <a className="post-author" href="#"><i className="zmdi zmdi-account"></i> Laura Green</a>
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

                                    <div className="post-tags-social-area mt-30 pb-5 d-flex flex-wrap align-items-center">

                                        <div className="popular-tags d-flex align-items-center">
                                        <p><i className="zmdi zmdi-label"></i></p>
                                        <ul className="nav">
                                        <li><a href="#">Conference</a></li>
                                        <li><a href="#">Workshops</a></li>
                                        </ul>
                                        </div>

                                        <div className="author-social-info">
                                        <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                        <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                        <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                        <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                        <a href="#"><i className="zmdi zmdi-share"></i></a>
                                        </div>
                                    </div>

                                    <div className="post-author-area d-flex align-items-center my-5">

                                        <div className="author-avatar">
                                        <img src="img/bg-img/53.jpg" alt/>
                                        </div>

                                        <div className="author-content">
                                        <h5>Frances Alvarado</h5>
                                        <span>UX Manager</span>
                                        <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing</p>
                                        </div>
                                    </div>

                                    <div className="pager-area d-flex align-items-center flex-wrap mb-80">

                                        <div className="pager-single-post d-flex align-items-center">
                                            <div className="post-thumb">
                                                <a href="#"><img src="img/bg-img/54.jpg" alt/></a>
                                            </div>
                                            <div className="post-meta">
                                                <a href="#" className="post-title">Strategic Planning</a>
                                                <span>Previous Post</span>
                                            </div>
                                        </div>

                                        <div className="pager-single-post d-flex align-items-center">
                                            <div className="post-thumb">
                                                <a href="#"><img src="img/bg-img/55.jpg" alt/></a>
                                            </div>
                                            <div className="post-meta">
                                                <a href="#" className="post-title">Petroleum Refining</a>
                                            <span>Next Post</span>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
            

        )
    };
}
export default ItemLoader;