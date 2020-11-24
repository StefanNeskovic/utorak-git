import Form from './FormComponents/Form'
import Message from './MessageComponents/Message'
import { Component } from 'react';
import './App.css';

class App extends Component{
  state={
    subject:'Input subject: ',
    body:'Input body: ',
    subjectText:'',
    bodyText:'',
  }
  
  renderForm(stateObject){
    this.setState({subject:this.state.subject,body:this.state.body,subjectText:stateObject.subjectText,bodyText:stateObject.bodyText})
  }

  render(){
    return(
      <div className='app-page'>
        <Form stateObj={this.state} bindForm={this.renderForm.bind(this)}/>
        <Message stateObj={this.state}/>
      </div>
    )
  }
}

export default App;
