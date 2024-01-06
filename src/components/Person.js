import React from 'react'

function Person({personThings}) {
  return (
    <div>
            <h2>My house no. is {personThings.houseNo}. My age is {personThings.age} and I am skilled in {personThings.skill}</h2>
    </div>
  )
}

export default Person

// Note: Why we need keys with List?
// 	A "key" is a special attribute you need to include when creating lists of elements.
// 	keys give the elements a stable identity.
// 	keys help React identify which items have changes, are added, or are removed.
// 	helps in efficient update of the user interface.