
import './App.css';
import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Speakers from './components/speakers';
import Tickets from './components/tickets';
import Team from './components/team';
import Conatct from './components/contact';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/about"  exact element={<About />}></Route>
                <Route path="/speakers"  exact element={<Speakers />}></Route>
                <Route path="/tickets"  exact element={<Tickets />}></Route>
                <Route path="/team"  exact element={<Team />}></Route>
                <Route path="/contact"  exact element={<Conatct />}></Route>
                <Route path="/"  exact element={<Home />}></Route>
            </Routes>
            <footer className="footer-area bg-img bg-overlay-2 section-padding-100-0">
                <div className="main-footer-area">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-sm-6 col-lg-3">
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

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">

                                    <h5 className="widget-title">Contact</h5>

                                    <div className="footer-contact-info">
                                        <p><i className="zmdi zmdi-map"></i> 184 Main Collins Street</p>
                                        <p><i className="zmdi zmdi-phone"></i> (226) 446 9371</p>
                                        <p><i className="zmdi zmdi-email"></i> <a href="" className="__cf_email__"
                                                data-cfemail="e5868a8b838097a58288848c89cb868a88">[email&#160;protected]</a></p>
                                        <p><i className="zmdi zmdi-globe"></i> www.confer.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">

                                    <h5 className="widget-title">Workshops</h5>

                                    <ul className="footer-nav">
                                        <li><a href="#">OSHA Compliance</a></li>
                                        <li><a href="#">Microsoft Excel Basics</a></li>
                                        <li><a href="#">Forum Speaker Series</a></li>
                                        <li><a href="#">Tedx Moscow Conference</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="single-footer-widget mb-60 wow fadeInUp" data-wow-delay="300ms">

                                    <h5 className="widget-title">Gallery</h5>

                                    <div className="footer-gallery">
                                        <div className="row">
                                            <div className="col-4">
                                                <a href="img/bg-img/21.jpg" className="single-gallery-item"><img
                                                        src="img/bg-img/21.jpg" alt/></a>
                                            </div>
                                            <div className="col-4">
                                                <a href="img/bg-img/22.jpg" className="single-gallery-item"><img
                                                        src="img/bg-img/22.jpg" alt/></a>
                                            </div>
                                            <div className="col-4">
                                                <a href="img/bg-img/23.jpg" className="single-gallery-item"><img
                                                        src="img/bg-img/23.jpg" alt/></a>
                                            </div>
                                            <div className="col-4">
                                                <a href="img/bg-img/24.jpg" className="single-gallery-item"><img
                                                        src="img/bg-img/24.jpg" alt/></a>
                                            </div>
                                            <div className="col-4">
                                                <a href="img/bg-img/25.jpg" className="single-gallery-item"><img
                                                        src="img/bg-img/25.jpg" alt/></a>
                                            </div>
                                            <div className="col-4">
                                                <a href="img/bg-img/26.jpg" className="single-gallery-item"><img
                                                        src="img/bg-img/26.jpg" alt/></a>
                                            </div>
                                        </div>
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
