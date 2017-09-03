import React, { PureComponent } from 'react';
import Img5 from './images/5.jpg';
class ShortShow extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">

            <div className="row ShortShow justify-content-between">
                <div className="home2 col-xl-7 col-md-7 col-sm-12 col-xs-12  ">

                    <a href="#">
                        <div>
                             <img  src={Img5} />
                        </div>
                        <p>neaclace</p>
                    </a>
                </div>
                <div className="home2 col-xl-4 col-md-4 col-sm-12 col-xs-12  ">
                    <a href="#">
                        <div>
                             <img  src={Img5} />
                        </div>
                    <p>neaclace</p>
                    </a>
                </div>
                <div className="home2 col-xl-12 col-md-12 col-sm-12 col-xs-12 align-self-center ">
                    <a href="#">
                        <div>
                            <img  src={Img5} />
                        </div>
                        <p>neaclace</p>
                    </a>
                </div>
                <div className="home2 col-xl-4 col-md-4 col-sm-12 col-xs-12 ">
                    <a href="#">
                        <div>
                             <img  src={Img5} />
                        </div>
                        <p>neaclace</p>
                    </a>
                </div>
                <div className="home2 col-xl-6 col-md-6 col-sm-12 col-xs-12  align-self-end">
                    <a href="#">
                        <div>
                        <img  src={Img5} /></div>
                        <p align-self-center>neaclace</p>
                    </a>

                </div>
            </div>
            </div>

        );
    }
}

export default ShortShow;/**
 * Created by Ani on 7/9/2017.
 *//**
 * Created by Ani on 7/11/2017.
 */
