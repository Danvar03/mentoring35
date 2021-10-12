import React, { Component } from 'react'
import From from '../components/From'
import FromNumber from '../components/FromNumber'
import Result from '../components/Result'

class App extends Component {
  

  render() {
    return (
      <div>
        <h3>Random Number</h3>
        <p>Sistema Ramdom - Demo</p>
        <FromNumber />
        <Result/>
      </div>
    )
  }
}

export default App


