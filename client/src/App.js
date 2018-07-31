import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,  Route } from "react-router-dom";
import Navbartop from './components/Navbartop';
import Imagehomepage from './components/Imagehomepage';
import FooterPage from './components/Footerpage';
import Profileform from './components/Profileform';
import Exercises from './components/Execises';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbartop /> <br/> 
        
       <Route exact path="/" component={Imagehomepage}/>
       <div className="container">
        <Route exact path="/profile/form" component={Profileform}/>
        </div> 
        <div className="container">
        <Route exact path="/exercises" component={Exercises}/>
        </div> 
         <FooterPage />
      </div>
    </Router>
    );
  }
}

export default App;
