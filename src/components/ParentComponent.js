import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: "Parent"
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }
// BUT as we are using This keyword in component so we need to bind the keyword.

  render() {
    return (
      <div>
        <ChildComponent greetHandler ={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent