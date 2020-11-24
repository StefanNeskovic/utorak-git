import { Component } from 'react';
// import './App.css';

class Subject extends Component{

  render(){
    return(
      <div>
        <h3><i>{this.props.subjectText}</i></h3>
      </div>
    )
  }
}

export default Subject;