import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getHelloWorld} from '../../store/actions/helloWorldAction'

class HomeView extends Component {
  componentDidMount() {
    this.props.getHelloWorld("Merhaba React!")
  }
  render() {    
    return (
      <div>
         <h1>{this.props.helloWorld}</h1>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  helloWorld: state.helloWorldReducer.helloWorld,
})
const mapDispatchToProps = {
  getHelloWorld
};

HomeView = connect(mapStateToProps, mapDispatchToProps)(HomeView)
export default HomeView