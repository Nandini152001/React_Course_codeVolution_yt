import React from 'react'

const heading = {
    fontSize: "45px",
    color: "green",
}
function Inline() {
  return (
    <div>
        <h1 style={heading}>Inline</h1>
        {/* as Inline component is child component to parent app component and this kinf of CSS is locally scopped that's why error class worked, so it can be conflictive to use regular css.*/}
        <h1 className="error">CSS Conflicts</h1>  
    </div>
  )
}

export default Inline