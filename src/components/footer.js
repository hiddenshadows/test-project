import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://gmail.us14.list-manage.com/subscribe/post?u=c154850c74dba0e9f9862dae4&amp;id=622a4b7a14";

const SimpleForm = () => <MailchimpSubscribe url={url}/>


function Footer() {
    return (
        <div>
          <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">About <span><a href="index.html">Us</a></span></h2>
              <p>Our First Site</p>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Other Projects</h2>
              <ul className="list-unstyled">
                <li><a href="https://github.com/hiddenshadows/"><span className="icon-long-arrow-right mr-2"></span>Github</a></li>
              </ul>
            </div>
          </div>
          {/* <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <ul className="list-unstyled">
                <li><a href="./index.html"><span className="icon-long-arrow-right mr-2"></span>Gym Fitness</a></li>
                <li><a href="./index.html"><span className="icon-long-arrow-right mr-2"></span>Crossfit</a></li>
                <li><a href="./index.html"><span className="icon-long-arrow-right mr-2"></span>Yoa</a></li>
                <li><a href="./index.html"><span className="icon-long-arrow-right mr-2"></span>Aerobics</a></li>
              </ul>
            </div>
          </div> */}
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Contact</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">UCSC</span></li>
	                {/* <li><a href="./index.html"><span className="icon icon-phone"></span><span className="text">+0</span></a></li> */}
	                <li><a href="./index.html"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </div>
        </div>
      </div>
      <SimpleForm/>
    </footer>
    
        </div>
    );
};

export default Footer;