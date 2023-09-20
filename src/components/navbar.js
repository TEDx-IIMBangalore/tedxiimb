import React from 'react';
import {Link, NavLink} from "react-router-dom";

class Navbar extends React.Component {
    componentDidMount(){
        window.initResponsiveNav();
    }

    render(){
      return (
          
        <header className="header-area">
            <div className="classy-nav-container breakpoint-off">
                <div className="container">

                    <nav className="classy-navbar justify-content-between" id="conferNav">

                        <Link to="/" className='nabarlogo'><img  src="img/core-img/logo.png" alt/></Link>

                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span></span><span></span><span></span></span>
                        </div>

                        <div className="classy-menu">

                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>

                            <div className="classynav">
                                <ul id="nav">
                                    <NavLink to="/" exact className={({ isActive }) => isActive ? "active" : "" }> <li><a>Home</a></li></NavLink>  
                                    <NavLink to="/about" exact style={{color:'red'}}> <li><a>About Us</a></li></NavLink>  
                                    <NavLink to="/speakers" exact style={{color:'red'}}> <li><a>Speakers</a></li></NavLink>  
                                    <NavLink to="/tickets" exact style={{color:'red'}}> <li><a>Tickets</a></li></NavLink>  
                                    <NavLink to="/team" exact style={{color:'red'}}> <li><a>Team</a></li></NavLink> 
                                    <NavLink to="/contact" exact style={{color:'red'}}> <li><a>Contact</a></li></NavLink>   
                                </ul>

                                {/* <a href="#" className="btn confer-btn mt-3 mt-lg-0 ml-3 ml-lg-5">Get Tickets <i
                                        className="zmdi zmdi-long-arrow-right"></i></a> */}
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </header>
      )
    }
}

export default Navbar;