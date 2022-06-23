import React from "react";
import "./Person.css"

const person =(props) => {
    return(
        <div>
            <h2 onClick={props.caleb}>My name is {props.name} and i am {props.age}years old</h2>
            <input onchange={props.zeh} value={props.name}></input>

        </div>
    )
}

export default person;