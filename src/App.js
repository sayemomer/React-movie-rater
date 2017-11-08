import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import RatingForm from "./RatingForm";
import RatingBox from './RatingBox';
import Movies from './Movies';
var moment = require('moment');

class App extends Component {

  constructor(props){
    super(props);
    this.state={
         post : [],
         imagePost:[]
    }

    this.addComment=this.addComment.bind(this);
  }

  componentWillMount(){
    
          axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
          .then( (res)=> this.setState( {post:res.data}  ))
          .catch( (err) => console.log(err) )

          axios.get("https://jsonplaceholder.typicode.com/photos?albumId=1")
          .then( (res)=> this.setState( {imagePost:res.data}  ))
          .catch( (err) => console.log(err) )
  }
          
         

  addComment(email,comment){
    let previousPost = this.state.post ;

    let newcomment={
      "postId": Math.random(),
      "id": Math.random(),
      "name": "omer",
      "email":email,
      "body":comment
    }
    previousPost.push(newcomment);
     
    this.setState({
      post:previousPost
    })    

  }

  

  render() {
  
    return (
      <div className="App">
        <body>

        <section className="section">
          <div className="container">

          <div className="RatingMovies">
            
          <Movies/>
          
          </div>
          
         <div className="ratingForm">
              <RatingForm
              addComment={this.addComment}
              />
         
         </div>

         <br/>
         
         <div className="RatingBox">
          { 
        this.state.post.map( (post)=> <RatingBox key={post.id} id={post.id} email={post.email} comment={post.body} moment={moment().format('MMMM Do YYYY, h:mm:ss a')}  />)
        }
            
         </div>
            
          </div>
        </section>

          
      </body>
      </div>
    );
  }
}

export default App;
