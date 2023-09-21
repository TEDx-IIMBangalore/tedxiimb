
import './App.css';
import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Speakers from './components/speakers';
import Tickets from './components/tickets';
import Team from './components/team';
import Blog from './components/blog';
import Conatct from './components/contact';
import ScrollToTop from './utils/ScrollToTop';

//initResponsiveNav

function App() {
  return (
    <Router>
        <ScrollToTop/>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path="/about"  exact component={About}></Route>
                <Route path="/speakers"  exact component={Speakers}></Route>
                <Route path="/tickets"  exact component={Tickets}></Route>
                <Route path="/team"  exact component={Team}></Route>
                <Route path="/blog"  exact component={Blog}></Route>
                <Route path="/blog/:slug"  exact component={Blog}></Route>
                <Route path="/contact"  exact component={Conatct}></Route>
                <Route path="/"  exact component={Home}></Route>
            </Switch>
            <footer className="footer-area bg-img bg-overlay-2 section-padding-100-0">
                <div className="main-footer-area">
                    <div className="container">
                        <div className="row justify-content-between">

                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">

                                    <a href="#" className="footer-logo"><img src="img/core-img/logo.png" alt/></a>
                                    <p>To take a trivial example, which of us ever undertakes laborious physical exercise,
                                        except to obtain.</p>

                                    <div className="social-info">
                                        <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                        <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                        <a href="#"><i className="zmdi zmdi-twitter"></i></a>
                                        <a href="#"><i className="zmdi zmdi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                           





                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">

                                    <h5 className="widget-title">Contact</h5>

                                    <div className="footer-contact-info">
                                        <p><i className="zmdi zmdi-map"></i>Bannerghatta main road</p>
                                        <p><i className="zmdi zmdi-phone"></i> 9876543210</p>
                                        <p><i className="zmdi zmdi-email"></i> test@gmail.com</p>
                                        <p><i className="zmdi zmdi-globe"></i> www.iimb.ac.in</p>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copywrite-content">
                        <div className="row">

                            <div className="col-12 col-md-6">
                                <div className="copywrite-text">
                                    <p>
                                        Copyright &copy;
                                        
                                        2023 All rights reserved
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="footer-menu">
                                    <ul className="nav">
                                        <li><a href="#"><i className="zmdi zmdi-circle"></i> Terms of Service</a></li>
                                        <li><a href="#"><i className="zmdi zmdi-circle"></i> Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </Router>
    
  );
}

export default App;
