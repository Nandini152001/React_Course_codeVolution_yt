import React from 'react';

const Hello = () => {
    // return (
    //     <div className ="dummyClass">
    //         <h1>Hello Nandini!</h1>
    //     </div>
    // )
    // return React.createElement("div", null, React.createElement("h1", null, 'Hello Nandini!!'))
    return React.createElement(
        'div',
    {id: 'helo', className: 'dummyClass'},
    React.createElement('h1', null, 'Hello Nandini!!!')
    )
}

export default Hello;