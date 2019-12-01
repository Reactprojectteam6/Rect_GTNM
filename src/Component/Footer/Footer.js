import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
  
           
            <div>
            {/* /newsletter*/}
            <div className="newsletter_w3layouts_agile">
               
              {/* <div className="col-sm-6 newsleft">
                    <h3>Sign up for Style Shop !</h3>
                </div>
                <div className="col-sm-6 newsright">
                    <form action="#" method="post">
                    <input type="email" placeholder="Enter your email..." name="email" required />
                    <input type="submit" defaultValue="Submit" />
                    </form>
                </div>
             */}
                <div className="clearfix" />
                </div>
                {/* //newsletter*/}
                {/* footer */}
                <div className="footer_agileinfo_w3">
                <div className="footer_inner_info_w3ls_agileits">
                    <div className="col-md-3 footer-left">
                    <h2><a href="index.html"><span>S</span>tyle Shop </a></h2>
                    <p>Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.</p>
                    <ul className="social-nav model-3d-0 footer-social social two">
                        <li>
                        <a href="#" className="facebook">
                            <div className="front"><i className="fab fa-facebook"></i></div>
                            <div className="back"><i className="fab fa-facebook" aria-hidden="true" /></div>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="twitter">
                            <div className="front"><i className="fab fa-twitter" aria-hidden="true" /></div>
                            <div className="back"><i className="fab fa-twitter" aria-hidden="true" /></div>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="instagram"> 
                            <div className="front"><i className="fab fa-instagram" aria-hidden="true" /></div>
                            <div className="back"><i className="fab fa-instagram" aria-hidden="true" /></div>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="pinterest">
                            <div className="front"><i className="fab fa-linkedin" aria-hidden="true" /></div>
                            <div className="back"><i className="fab fa-linkedin" aria-hidden="true" /></div>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-9 footer-right">
                    <div className="sign-grds">
                        <div className="col-md-4 sign-gd">
                        <h4>Our <span>Information</span> </h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Short Codes</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        </div>
                        <div className="col-md-5 sign-gd-two">
                        <h4>Store <span>Information</span></h4>
                        <div className="address">
                            <div className="address-grid">
                            <div className="address-left">
                                <i className="fa fa-phone" aria-hidden="true" />
                            </div>
                            <div className="address-right">
                                <h6>Phone Number</h6>
                                <p>+1 234 567 8901</p>
                            </div>
                            <div className="clearfix"> </div>
                            </div>
                            <div className="address-grid">
                            <div className="address-left">
                                <i className="fa fa-envelope" aria-hidden="true" />
                            </div>
                            <div className="address-right">
                                <h6>Email Address</h6>
                                <p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
                            </div>
                            <div className="clearfix"> </div>
                            </div>
                            <div className="address-grid">
                            <div className="address-left">
                                <i className="fa fa-map-marker" aria-hidden="true" />
                            </div>
                            <div className="address-right">
                                <h6>Location</h6>
                                <p>Broome St, NY 10002,California, USA.
                                </p>
                            </div>
                            <div className="clearfix"> </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3 sign-gd flickr-post">
                        <h4>Flickr <span>Posts</span></h4>
                        <ul>
                            <li><a href="#"><img src= {require('./fimage/image1.jpg') } className="img-responsive" /></a></li>
                            <li><a href="#"><img src= {require('./fimage/image2.jpg') }  alt=" " className="img-responsive" /></a></li>
                            <li><a href="#"><img src= {require('./fimage/image3.jpg') }  alt=" " className="img-responsive" /></a></li>
                            <li><a href="#"><img src= {require('./fimage/image4.jpg') }  alt=" " className="img-responsive" /></a></li>
                            <li><a href="#"><img src= {require('./fimage/image5.jpg') }  alt=" " className="img-responsive" /></a></li>
                            <li><a href="#"><img src= {require('./fimage/image6.jpg') }  alt=" " className="img-responsive" /></a></li>
                            <li><a href="#"><img src= {require('./fimage/image7.jpg') }  alt=" " className="img-responsive" /></a></li>
                            <li><a href="#"><img src= {require('./fimage/image8.jpg') }  alt=" " className="img-responsive" /></a></li>
                            <li><a href="#"><img src= {require('./fimage/image9.jpg') }  alt=" " className="img-responsive" /></a></li>
                        </ul>
                        </div>
                        <div className="clearfix" />
                    </div>
                    </div>
                    <div className="clearfix" />
                    <p className="copy-right-w3ls-agileits">© 2019 Style Shop. All rights reserved | Design by <a href="http://w3layouts.com/">KBST Team!!</a></p>
                </div>
                </div>
            </div>
        
        );
    }
}

export default Footer;
