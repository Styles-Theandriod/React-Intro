import React from "react";

function User(props) {
  console.log(props);
  return (
  <div style={{fontFamily:'monospace', backgroundColor:'lightblue', padding:'20px'}}>
    <h1>{props.welcome}</h1>
    <h2>{props.title}</h2>
    <h3>{props.subtitle}</h3>
    <p>{props.firstName}, {props.lastName}</p>
    <small>{props.date}</small>
  </div>
  )}

export default User;
