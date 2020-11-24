import './InputField.css';
import { Component } from 'react';


class InputField extends Component{

  constructor(props){
    super(props);
    this.state={
      text:''
    }
  }

  onChangeHandler(event){
    this.setState({text:event.target.value})
    this.props.changeEvent(this.state.text)
  }

  render(){
    return(
      <div>
        <label>{this.props.text}</label>
        <input type='text' className='form-input' value={this.state.text} onChange={this.onChangeHandler.bind(this)}/>
      </div>
    )
  }
}

export default InputField;