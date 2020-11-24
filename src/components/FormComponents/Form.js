import './Form.css';
import InputField from './InputField'
import ButtonSend from './ButtonSend'
import { Component } from 'react';


class Form extends Component{

  constructor(props){
    super(props);
    this.state={
      subjectText:'',
      bodyText:''
    }
  }

  renderSubject(text){
    this.setState({subjectText:text,bodyText:this.state.bodyText})
    this.props.bindForm(this.state)
  }
  renderBody(text){
    this.setState({subjectText:this.state.subjectText,bodyText:text})
    this.props.bindForm(this.state)
  }

  clickEvent(){
    this.setState({subjectText:'',bodyText:''})
    this.props.bindForm(this.state)
  }

  render(){
    return(
      <div className='form-div'>
        <h3 className='form-header'>Send message:</h3>
        <InputField text={this.props.stateObj.subject} changeEvent={this.renderSubject.bind(this)}/>
        <InputField text={this.props.stateObj.body} changeEvent={this.renderBody.bind(this)}/>
        <ButtonSend sendEvent={this.clickEvent.bind(this)}/>
      </div>
    )
  }
}

export default Form;