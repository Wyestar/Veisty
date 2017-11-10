// main component is primary window, always will display navbar and dynamic character/vault gear sections


import React, { Componenet } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Login from './login'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={ Login } />
        </Switch>
      </Router>
    )
  }
}
