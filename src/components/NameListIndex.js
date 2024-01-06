import React from 'react'

function NameListIndex() {

    const names = ["Nandini","Sneha","Sneha"]

    const nameList = names.map((name1, index) => <h2 key={index}>{index}{name1}</h2>)
  return (
    <div>{nameList}</div>
  )
}

export default NameListIndex