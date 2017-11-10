import React from "react";
import RatingBox from './RatingBox';
import axios from "axios";
var moment = require('moment');

class RatingForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      characters : 0 ,
      errorMessage:" ",
      post : []
    }

    this.newComment=this.newComment.bind(this);

    this.addComment=this.addComment.bind(this);

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


  componentWillMount(){
    
          axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
          .then( (res)=> this.setState( {post:res.data}  ))
          .catch( (err) => console.log(err) )

  }

  characterCount(){
    if( this.comment.value.length <100 ){
      this.setState({
        errorMessage:" "
      })
    }
    else{
      this.setState({
        errorMessage:" Max value exceeds "
  
      })

    }
    this.setState({
      characters : this.comment.value.length 
    })


  }
  
 

  newComment(){
    if ( this.email.value ==0 || this.comment.value==0 ){
      this.setState({
        errorMessage:" Can't submit empty "

      })


    }
    else if ( !this.state.errorMessage==""){
      this.addComment(this.email.value,this.comment.value);
      
          this.email.value="";
          this.comment.value="";
          this.setState({
            errorMessage:" "
          })
          this.setState({ characters: 0 });

    }
   
  }

  render(){
     return (
      <div className="container">
      
      
      <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="text" placeholder="Email" ref={ (c) => this.email =c }/>
      </div></div>
    
      <div class="field">
      <label class="label">Comment</label>
      <div class="control">

        <textarea class="textarea" placeholder="Comment"  ref={ (c)=> this.comment =c} onKeyUp={this.characterCount.bind(this)}></textarea>

        <p> {this.state.characters} characters (Max 100)  </p>
        <p>{this.state.errorMessage}</p>
        <button class="button is-primary" onClick={this.newComment}>Submit</button>
    
      </div>
      </div>
      <div className="RatingBox">
      { 
    this.state.post.map( (post)=> <RatingBox key={post.id} id={post.id} email={post.email} comment={post.body} moment={moment().format('MMMM Do YYYY, h:mm:ss a')}  />)
    }
        
      </div>

      </div>
   

     )

    }
}

export default RatingForm ;

