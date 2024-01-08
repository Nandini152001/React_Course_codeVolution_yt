import React from 'react'
import "./MyStyles.css"

function StyleSheet(props) {
  // conditonally apply the class based on props or state of the component.
  let classNameVr = props.primary ? "primary" : ""
  return (
    <div >
        <h2 className={`${classNameVr} font-xl border`}>OTC Web App</h2>
    </div>
  )
}

export default StyleSheet