import React, { Component } from 'react'

export default class ClassComp extends Component {
    state={
        count: 0,
        status:'',
    }
     plus=()=>{
      this.setState({count: this.state.count + 1})  
     }

     minus=()=>{
        if(this.state.count>0){
            this.setState({count: this.state.count - 1})   
        }
        
     }
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h1>{this.state.count}</h1>
        <button className='btn btn-outline-danger' onClick={this.plus}>+</button>
        <button className='btn btn-outline-primary' onClick={this.minus}>-</button>
        <button className='btn btn-outline-info' onClick={this.props.onKill}>kill</button>
      </div>
    )
  }
}
