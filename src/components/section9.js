import React from 'react';

function Section9() {
    return (
        <div>
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div className="container">
      	<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-animate">
            <span className="subheading">Contact</span>
            <h2 className="mb-4">Contact Me</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>

        <div className="row block-9">
          <div className="col-md-7 order-md-last d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" />
            </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Email"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject"/>
              </div>
              <div className="form-group">
                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
              </div>
            </form>
          
          </div>

          <div className="col-md-5 d-flex">
          	<div className="row d-flex contact-info mb-5">
		          <div className="col-md-12 ftco-animate">
		          	<div className="box p-2 px-3 bg-light d-flex">
		          		<div className="icon mr-3">
		          			<span className="icon-map-signs"></span>
		          		</div>
		          		<div>
			          		<h3 className="mb-3">Address</h3>
				            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
			            </div>
			          </div>
		          </div>
		          <div className="col-md-12 ftco-animate">
		          	<div className="box p-2 px-3 bg-light d-flex">
		          		<div className="icon mr-3">
		          			<span className="icon-phone2"></span>
		          		</div>
		          		<div>
			          		<h3 className="mb-3">Contact Number</h3>
				            <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
			            </div>
			          </div>
		          </div>
		          <div className="col-md-12 ftco-animate">
		          	<div className="box p-2 px-3 bg-light d-flex">
		          		<div className="icon mr-3">
		          			<span className="icon-paper-plane"></span>
		          		</div>
		          		<div>
			          		<h3 className="mb-3">Email Address</h3>
				            <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
			            </div>
			          </div>
		          </div>
		          <div className="col-md-12 ftco-animate">
		          	<div className="box p-2 px-3 bg-light d-flex">
		          		<div className="icon mr-3">
		          			<span className="icon-globe"></span>
		          		</div>
		          		<div>
			          		<h3 className="mb-3">Website</h3>
				            <p><a href="./index.html">yoursite.com</a></p>
			            </div>
			          </div>
		          </div>
		        </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Section9;