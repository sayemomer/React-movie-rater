import React from "react";

class RatingBox extends React.Component{


  constructor(props){
   super(props);

    this.state={
       isAbusive : false,
       totalLike : "",
       totalDislike:""
       }

  }

  toggleAbuse( event ){
  event.preventDefault();
    this.setState({
      isAbusive : !this.state.isAbusive 
    })

  }

  likeCounter( event ){

    event.preventDefault();
    let like= this.state.totalLike;
    like++;
    this.setState({
      totalLike : like
    })

  }

  dislikeCounter( event ){
    
        event.preventDefault();
        let dislike= this.state.totalDislike;
        dislike++;
        this.setState({
          totalDislike : dislike
        })
    
      }

  

    render(){

      let commentBody ;
      if( this.state.isAbusive === false ){
        commentBody =this.props.comment ;
      }
      else{
        commentBody = <em> comment marks as abusive </em>
      }
        return(

            <div className="container">

            <div class="card">
            <header class="card-header">
              <p class="card-header-title">
                {this.props.email}
              </p>
            </header>
            <div class="card-content">
              <div class="content">
               {commentBody} <br/>
                
              </div>
            </div>
            <footer class="card-footer">
              <a href=" " class="card-footer-item" onClick={this.likeCounter.bind(this)}> <p> ({this.state.totalLike}) </p> <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true" ></i>
              </a>
              <a href=" " class="card-footer-item" onClick={this.toggleAbuse.bind(this)}><i class="fa fa-times fa-2x" aria-hidden="true"></i>
              </a>
              <a href=" " class="card-footer-item" onClick={this.dislikeCounter.bind(this)}><p>({this.state.totalDislike})</p><i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true"></i>
              </a>
            </footer>
          </div>

          </div>

        ); 


    }



}


export default RatingBox ;