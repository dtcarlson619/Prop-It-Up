import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            ageCount: props.age
        }
    }
    handleClick = () => {
        this.setState({
            ageCount: this.state.ageCount + 1
        })
    }
    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div> 
                <h2> {lastName}, {firstName} </h2>
                <p>Age: {this.state.ageCount} </p>
                <p>Hair Color: {hairColor} </p>
                <button onClick={this.handleClick}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;