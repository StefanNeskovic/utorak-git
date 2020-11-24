import { Component } from 'react';
// import './App.css';

class Body extends Component{

  render(){
    return(
      <div>
        <p><i>{this.props.bodyText}</i></p>
      </div>
    )
  }
}

export default Body;