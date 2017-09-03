import React, { PureComponent } from 'react';
import './App.css';
import Home from './app/Components/Home.js';
import Header from './app/Components/Header.js';
import Footer from './app/Components/Footer.js'
class App extends PureComponent {
    constructor(props){
        super(props);
        this.state = {

        };
    }
  render() {
    return (
      <div>
          <Header/>
          <Home/>
          <Footer/>
      </div>
    );
  }
}

export default App;
