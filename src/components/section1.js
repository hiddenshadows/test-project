import React from 'react';

function Section1() {
    return (
        <div>
            <section className="ftco-section ftco-services ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row no-gutters services-section">
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="media block-6 services text-center d-block">
                        <div className="icon"><span className="flaticon-body"></span></div>
                        <div className="media-body">
                            <h3 className="heading mb-3">Free Lesson</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            {/* <!-- <p><a href="#" className="btn btn-primary">Read more</a></p> --> */}
                        </div>
                        </div>      
                    </div>
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="media block-6 services services-2 text-center d-block">
                        <div className="icon"><span className="flaticon-diet"></span></div>
                        <div className="media-body">
                            <h3 className="heading mb-3">35% Discount</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            {/* <!-- <p><a href="#" className="btn btn-primary">Read more</a></p> --> */}
                        </div>
                        </div>    
                    </div>
                    <div className="col-md-4 d-flex align-self-stretch ftco-animate">
                        <div className="media block-6 services text-center d-block">
                        <div className="icon"><span className="flaticon-running"></span></div>
                        <div className="media-body">
                            <h3 className="heading mb-3">Free Testing</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            {/* <!-- <p><a href="#" className="btn btn-primary">Read more</a></p> --> */}
                        </div>
                        </div>      
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section1;