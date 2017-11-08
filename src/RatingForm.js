import React from "react";

class RatingForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      characters : 0 ,
      errorMessage:" "
    }

    this.newComment=this.newComment.bind(this);

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
      this.props.addComment(this.email.value,this.comment.value);
      
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

      </div>
   

     )

    }
}

export default RatingForm ;

