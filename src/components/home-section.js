import React from 'react';

function Home() {
    return (
        <section id="home-section" class="hero">
		  <div class="home-slider js-fullheight owl-carousel">
			<div class="slider-item js-fullheight">
				<div class="overlay"></div>
				<div class="container-fluid p-0">
				<div class="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
					<div className="one-third order-md-last img js-fullheight" style={{backgroundImage: "url(/images/bg_1.jpg)"}}>
						<h3 className="vr" style={{backgroundImage: "url(/images/divider.jpg)"}}>Strength</h3>
					</div>
					<div class="one-forth d-flex js-fullheight align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
						<div class="text">
							<span class="subheading">Welcome to the Club</span>
							<h1 class="mb-4 mt-3">Get A <span>Perfect</span> Body <span>Figure</span></h1>
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
							
							<p><a href="./index.html" className="btn btn-primary px-5 py-3 mt-3">Join with us</a></p>
						</div>
					</div>
					</div>
				</div>
	        </div>

	      <div class="slider-item js-fullheight">
	      	<div class="overlay"></div>
				<div class="container-fluid p-0">
					<div class="row d-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
						<div className="one-third order-md-last img js-fullheight" style={{backgroundImage: 'url(/images/bg_2.jpg)'}}>
							<h3 className="vr" style={{backgroundImage: "url(/images/divider.jpg)"}}>Workout</h3>
						</div>
						<div class="one-forth d-flex js-fullheight align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
							<div class="text">
								<span class="subheading">Welcome to Club</span>
								<h1 class="mb-4 mt-3">Pain is <span>Temporary</span> But Glory is <span>Forever</span></h1>
								<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
								
								<p><a href="./index.html" class="btn btn-primary px-5 py-3 mt-3">Join with us</a></p>
							</div>
						</div>
						</div>
					</div>
	     	  </div>
	    	</div>
    	</section>
    );
};

export default Home;
