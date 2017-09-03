import React, { PureComponent } from 'react';
import Menu from './Menu.js';
import Logo from './images/logo.png'
class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

            data: [
                {
                    item: 'home',
                    uri: '#'
                },
                {
                    item: 'collection',
                    uri: '#'
                },
                {
                    item: 'video',
                    uri: '#'
                },

                {
                    item: 'news',
                    uri: '#'
                },
                {
                    item: 'contact',
                    uri: '#'
                }
            ]
        }
    };


    render() {
        return (




                <div >
                        {/*<img src={Logo} style={{with:'70px',height:'90px' }}/>*/}
                        {/*<h3>CANNA JEWELLERY</h3>*/}
                        {/*<br/>*/}
                        {/*<h4>shadow of your beauty</h4>*/}
                        {/*</div>*/}
                        <Menu/>
                </div>


        );
    }
}

export default Header;