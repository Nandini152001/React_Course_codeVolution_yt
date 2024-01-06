import React, { Component } from 'react'

// Created UserGreeting component to learn conditional rendering.
class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        //  isLoggedIn: false
        isLoggedIn: true
      }
    }

  render() {

    // 1st way: Conditional Rendering using if/else
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             Welcome Nandini!
        //         </div>
        //     )
        // } else{
        //         return (
        //             <div>
        //                 Welcome Guest!
        //             </div>
        //         )
        // }

    // 2nd way: Conditional Rendering using element variables.
        // let message 
        // if(this.state.isLoggedIn){
        //     message = <div>
        //         Welcome Nandini!
        //     </div>
        // } else {
        //     message = <div>
        //         Welcome Guest!
        //     </div>
        // }

        // return <div>{message}</div>

        // 3rd way: Conditional rendering using Conditional Operator
        // return (
        //     this.state.isLoggedIn ? <div>Welcome Nandini!</div> : <div>Welcome Guest!</div>
        // ) 

        // 4th way: Conditional Rendering using short circuit operator
        // Short circuit operator approach is just a short cut to ternary operator approach
        // When you want to render something or nothing, we use short-circuit operator.
        return this.state.isLoggedIn && <div>Welcome Nandini!</div>
  }
}

export default UserGreeting