import React from "react";

class RatingBox extends React.Component{

  

    render(){
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
               {this.props.comment} <br/>
                <time >{this.props.moment}</time>
              </div>
            </div>
            <footer class="card-footer">
              <a href=" " class="card-footer-item">Like</a>
              <a href=" " class="card-footer-item">Share</a>
            </footer>
          </div>

          </div>

        ); 


    }



}


export default RatingBox ;