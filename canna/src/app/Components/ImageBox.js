import React, { PureComponent } from 'react';
import Img6 from './images/6.jpg';
class ImageBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        return (

<div className="imagebox col-xs-6 col-sm-6 col-md-4 col-lg-3 " >
                    <div className=".">
                        <a href="#">
                            <div>
                                 <img  src={Img6} />
                            </div>
                            <div className="imagebox-text">
                            <h4>name</h4>
                            <p>description blo  bblo bloo vbloblo  bblo bloo vblo
                                bloblo  bblo bloo bloblo blobloblo lo</p>
                            </div>
                        </a>

                    </div>

</div>


        );
    }
}


export default ImageBox;
