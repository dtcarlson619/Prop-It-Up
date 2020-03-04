import React, { Component } from 'react';

const PersonCard = (props) => (
    <div> 
        <h2> {props.lastName}, {props.firstName} </h2>
        <p>Age: {props.age} </p>
        <p>Hair Color: {props.haircolor} </p>
    </div>
);

export default PersonCard