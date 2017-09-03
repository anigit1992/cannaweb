import React, { PureComponent } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Logo from './images/logo.png'
class logo extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="brand" href="#">
            <img src={Logo} />
                <div className="logo-text">
             <h3 className="logoname">CANNA JEWELLERY</h3>
                    <small href="#" className="site-description">shadow of your beauty</small>
                </div>
            </div>
                );
    }
}
export default logo;

