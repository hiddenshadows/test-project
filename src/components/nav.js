import React, { Component } from 'react'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">313 Health Tips</a>
                        <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu" /> Menu
                        </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav nav ml-auto">
                                <li className="nav-item"><a href="#home-section" className="nav-link"><span>Home</span></a></li>
                                <li className="nav-item"><a href="#BMI-section" className="nav-link"><span>BMI Calculator</span></a></li>
                                <li className="nav-item"><a href="#services-section" className="nav-link"><span>Filler section</span></a></li>
                                {/* <li className="nav-item"><a href="#schedule-section" className="nav-link"><span>Schedule</span></a></li>
                                <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                                <li className="nav-item"><a href="#coaches-section" className="nav-link"><span>Coaches</span></a></li>
                                <li className="nav-item"><a href="#blog-section" className="nav-link"><span>Blog</span></a></li>
                                <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };
}

