import React from "react";
import Collapsible from "react-collapsible";

function Done(props){
  return(
    <Collapsible trigger= {props.title + " card"}>
    <div className="item-container">
    <button className="close-bar" onClick={() => {
    props.onChecked(props.id);
  }}><i className="fa fa-times" /></button>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>{props.date}</p>
    <p>{props.time}</p>
 
  </div>
 
    </Collapsible>
  )
}



export default Done;
