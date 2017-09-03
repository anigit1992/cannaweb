import React, { PureComponent } from 'react';
import ImageBox from './ImageBox.js';
import Img1 from './images/img1.jpg';
import Img2 from './images/img2.jpg';
import Img3 from './images/3.jpg';

import News from './news.js';
import ShortShow from './shortShow.js';
import Collaction from './collaction.js';
import Contact from './contact.js';
import Api from '../lib/Api.js';
import {Navbar, Nav, NavItem,NavDropdown, Carousel,  MenuItem} from 'react-bootstrap';
class Collections extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Carousel className="slid">
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={Img1}/>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={Img2}/>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={Img3}/>

                    </Carousel.Item>
                </Carousel>

            <ShortShow/>

<News/>
                <Collaction/>
                <Contact/>
            </div>
        );
    }
}

 export default Collections;



