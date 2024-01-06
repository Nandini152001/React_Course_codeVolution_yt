import React from 'react'

function Person({personThings}) {
  return (
    <div>
            <h2>My house no. is {personThings.houseNo}. My age is {personThings.age} and I am skilled in {personThings.skill}</h2>
    </div>
  )
}

export default Person