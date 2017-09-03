/**
 * Created by Ani on 7/9/2017.
 */
import React, { PureComponent } from 'react';
import Img5 from './images/5.jpg';
class News extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (

            <div className="container">
            <div className="news row">

                <div className="news-text col-xl-5 col-md-5 col-sm-5 col-xs-12">
                    <div>
                        <div className="date">29</div>
                        <div className="date1">07.2017</div>
                        <h2 id="">This could instead be</h2>
                    </div>

                    Totally responsive design provides excellent experience on all
                    devices no matter what resolutions they support. Everyone can enjoy the fabulous
                    look of your website at any display size.
                    The slider and other components are made to be 100% responsive to produce
                    optimal UX for different environments.
                </div>
                <div className="col-xl-7 col-md-7 cil-sm-7 col-xs-12">
                <img src={Img5} className="img-fluid"/>
                </div>
            </div>
            </div>

        );
    }
}

export default News;/**
 * Created by Ani on 7/9/2017.
 */
