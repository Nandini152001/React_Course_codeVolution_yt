import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         userName: " ",
         comments: " ",
         topic: "react"
      }
    }

    handleUserNameChange =(event) =>{
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = event =>{
        this.setState({
            // userName: event.target.value,
            comments: event.target.value
        })
    }

    handleTopicChange =event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmitForm = (event) =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        // to prevent the default behaviour of refreshing the page
        event.preventDefault() 
    }
  render() {

    const {userName, comments, topic} = this.state
    return (

    <form onSubmit={this.handleSubmitForm}>
      <div>
        <div>
            <h1>Form Components</h1>
            <label>UserName</label>
            <input type='text' value={userName} onChange={this.handleUserNameChange}></input>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
      </div>
      <button type='submit'>Submit</button>
    </form>
    )
  }
}

export default Form