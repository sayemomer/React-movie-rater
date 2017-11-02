import React from "react";
import "./css/style1.css";

class Movies extends React.Component{
  constructor(props){
    super(props);

  }


  render(){

   return(
  <div className="container">
  <section class="columns">
  
  
                  <div id="flex-item">
  
                      <figure>
                          <img src={this.props.moviePic}/>
                          <figcaption> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </figcaption>
  
                      </figure>
                  </div>
                  
  
          </section>

     </div>

   )

  }


}

export default Movies;