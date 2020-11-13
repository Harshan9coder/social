import React from 'react'
import './style.css'
function Newtext(props) {
    console.log(props)
   let color = props.textcolor ? 'primary' : ''
    return (
        <div>
            <h1 className={`${color}`}> {props.index} my name is {props.person}</h1>
        </div>
    )
}

export default Newtext
