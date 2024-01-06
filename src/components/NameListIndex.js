import React from 'react'

function NameListIndex() {

    const names = ["Nandini","Sneha","Pari"]

    const nameList = names.map(name1 => <h2 key={name1}>{name1}</h2>)
  return (
    <div>NameListIndex</div>
  )
}

export default NameListIndex