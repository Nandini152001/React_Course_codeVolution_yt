import React, { Component } from 'react'

export class Counter extends Component {

    constructor(){
        super()
        this.state ={
            count: 0
        }
    }

    increCount(){
        // We should not modift the state directly as it with this value won't increase in UI, only will increase in browser means UI not reRendering when the state is changing.
        // this.state.count = this.state.count +1
        // console.log(this.state.count);
        
        this.setState(
            {
                count: this.state.count +1,
            }
        )
    }

  render() {
    return (<div>
      <div>Count -{this.state.count}</div>
      <button onClick={() => this.increCount()}>Increment</button>
      </div>
    )
  }
}

export default Counter;