import React from "react";
import Lists from "./lists";

function Hobbies(props){
      console.log(props.names)
      return (
      <div>
            <h4>Hobbies for {props.names[0]}</h4> 
            <Lists />
            <p>Contact me through: {props.tel}</p>
      </div>
      )
}

export default Hobbies