import React, { PureComponent } from 'react';
import Post from './images/icon-envelope.png';
import Map from './images/icon-map.png';
import Phone from './images/icon-phone.png';
class Footer extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                <div className="col-xs-12  col-sm-12 col-md-3 col-lg-4 col-xl-4 contact" >
                    <h4>Contact</h4>
                    <div>
                        <img src={Map}/>
                        <p>Company name: Canna ...</p>
                    </div>
                    <div>
                        <img src={Post}/>
                        <p>contact@canna.com</p>
                    </div>
                    <div>
                        <img src={Phone} href="tel:+37493536478"/>
                        <a href="tel:+37493536478">(093)536478</a>
                    </div>
                </div>
                <div className="col-xs-12  col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h4>Social Media</h4>
                    <p>find us on</p>
                        <div className="media">
                            <div>
                                <a href="#"><i className=" fa fa-facebook" ></i></a>
                            </div>
                            <div>
                                <a href="#"><i className=" fa fa-instagram" ></i></a>
                            </div>
                            <div>
                                <a href="#"><i className=" fa fa-pinterest" ></i></a>
                            </div>
                        </div>
                </div>
                <div className=" col-xs-12  col-sm-12 col-md-5 col-lg-4 col-xl-4  " >
                    <h4> NewsLetter</h4>
                    <div className="newsletter">
                         <p>get news on social media</p>
                            <div>
                                 <input type="email" placeholder="e-mail..."  />
                                 <button  >Subscribe</button>
                            </div>
                    </div>
                </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;