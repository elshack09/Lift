import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbartop from './components/Navbartop';
import Imagehomepage from './components/Imagehomepage';
import FooterPage from './components/Footerpage';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbartop /> <br/>
        <div>
          <Imagehomepage/>
        </div> 
         <FooterPage />
      </div>
    
    );
  }
}

export default App;
