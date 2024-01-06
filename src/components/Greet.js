import React from 'react'

// function Greet(){
//     return <h1>Hello Nandini</h1>
// }

// Named Export:
// export const Greet = (props) => {
// console.log(props);
// return (
//     <div>
//         <h1>Hello {props.name}, you're great {props.profession} </h1>
//         {props.children}
// </div>
//  ) //curly braces to evaulate JSX expressions.
// }
// export default Greet;

// DESTRUCTURING
// Destructuring in function parameter
// export const Greet = ({name, profession}) => {

//     return (
//         <div>
//             <h1>Hello {name}, you're great {profession} </h1>
            
//     </div>
//      ) //curly braces to evaulate JSX expressions.
//     }

// Destructuring in function body
export const Greet = props => {
    const {name, profession} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {profession}
            </h1>
        </div>
    )
}

