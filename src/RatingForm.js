import React from "react";

class RatingForm extends React.Component{
  constructor(props){
    super(props);

    this.newComment=this.newComment.bind(this);

  }  
  
 

  newComment(){
    this.props.addComment(this.email.value,this.comment.value);
    this.email.value="";
    this.comment.value="";
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
        <textarea class="textarea" placeholder="Textarea"  ref={ (c)=> this.comment =c}></textarea>
        
        <button class="button is-primary" onClick={this.newComment}>Submit</button>
    
      </div>
      </div>

      </div>
   

     )

    }
}

export default RatingForm ;

