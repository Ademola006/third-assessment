import React, { Component } from 'react'
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {
  state = {
    username: "Micheal"

  }

nameChangeHandler = (e) => {
  this.setStatestate({
    username: "Micheal"
});
}
 
  render(){
    return(
      <div className='Container'>
        <UserOutput changeName= {this.state.username} change={this.nameChangeHandler} />
        <UserOutput/>
        <UserInput/>
        <UserOutput/>

        
        
      </div>
    )
  }
}

export default App