import './ButtonSend.css';
import { Component } from 'react';


class ButtonSend extends Component{

  onClickHandler(event){
    this.props.sendEvent()
  }
  render(){
    return(
      <div>
        <button className='form-button' onClick={this.onClickHandler.bind(this)}>Send message</button>
      </div>
    )
  }
}

export default ButtonSend;