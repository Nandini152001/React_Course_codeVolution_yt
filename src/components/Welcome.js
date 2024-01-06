import React, {Component} from 'react'

// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} famous as {this.props.profession}</h1>
//     }
// }

// /Destructuring in Class Component
    class Welcome extends Component{
        render(){
            const {name, profession} = this.props
            return <h1>
                Welcome {name} tumtoh {profession}
            </h1>
        }
    }

export default Welcome;