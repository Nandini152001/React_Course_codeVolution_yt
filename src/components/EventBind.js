import React, { Component } from 'react'

class EventBind extends Component {

    // shortcut: rconst
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

    //   Binding the *this* keyword in Event Handler inside constructor - 3rd approach of binding mentioned in official documentation of React.
      this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "GoodBye"
    //     })
    //     // console.log(this);
        
    // }

    // 4th way:-> (CLASS PROPERTY AS ARROW FUNCTIONS)
    // to use an arrow function as a class property.(basically change the way you define method in the class)

    clickHandler = () => {
        this.setState({
            message: "GoodBye Friends!"
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* 1st way:-> To use bind keyword (binding in render method) */}
        {/* <button onClick={this.clickHandler.bind(this)}>
            Click
        </button> */}

        {/* 2nd way:-> To use arrow functions in Render Method */}
        {/* <button onClick={() => this.clickHandler()}>
            ClickUsingArrowFunBind
        </button> */}

        {/* 3rd way:-> 3rd way:-> binding the event handler in constructor instead of binding in Render Method.
	 */}
      <button onClick={this.clickHandler}>
            ClickUsingConstructor
        </button>
      </div>
    )
  }
}

export default EventBind