// imports?
import axios from 'axios'
import React, { Component } from 'react'
// import { connect } from 'react-redux';

const getCharInfo = "https://www.bungie.net/Platform/Destiny2/2/Profile/4611686018433773881/Character/2305843009260778248/?components=200"
const player = "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/2/"

class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      playerName: ''
    }
  }
  onChangeHandler(fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.target.value
      });
    }
  }


  onSubmitHandler() {
    const { playerName } = this.state
    const route = player + playerName
    axios.get(route)
    .then( res => res.data)
    .then( (stuff) => {
      console.log(stuff)
    })
  }

  render() {
    return (
      <div>
        <h4>LOGIN</h4>
          <input onChange={this.onChangeHandler('playerName')} type="text" value="Geuvrztraminer" />
          <button onClick={this.onSubmitHandler} >SUBMIT</button>
    </div>
    )
  }
};


export default login
