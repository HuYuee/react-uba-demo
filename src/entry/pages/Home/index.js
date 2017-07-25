import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

// import HomeHeader from './HomeHeader.js'
// import Add from './Add.js'
// import Show from './Show.js'

import './index.less'

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){

  }
  componentDidMount(){

  }
  handleClick = () => {
    console.log( findDOMNode(this.contanierNode) )
  }
  render(){
    return (
      <div className="home">
        <div className="container">
          hdhhdhsdh
        </div>
      </div>
    )
  }
}

export default Home
