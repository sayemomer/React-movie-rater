import React, { Component } from 'react';
import './css/App.css';

import RatingForm from "./Component/RatingForm";
import RatingBox from './Component/RatingBox';
import Movies from './Component/Movies';
import Intro from "./Component/Intro";
import { BrowserRouter as Router, Route, Redirect,Link} from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props);

  }
  

  render() {
  
    return (
      <div className="App">
        <body>

        <Router>
        <div className="main">
      
        <div class="navbar-menu">
         <div class="navbar-start">
        
         <a class="navbar-item">
         <Link to="/">Home</Link>
          </a>

          <a class="navbar-item">
          <Link to="/Movies">Movies</Link>
           </a>

           <a class="navbar-item">
           <Link to="/Comments">Comments</Link>
            </a>
          
         </div>
        </div>
         
          <Route exact path="/" component={Intro}/>
          <Route path="/Movies" component={Movies}/>
          <Route path="/Comments" component={RatingForm}/>
          </div>

        
      </Router>
          
      </body>
      
      </div>
    );
  }
}

export default App;
