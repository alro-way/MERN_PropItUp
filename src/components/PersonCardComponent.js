import React, { Component } from 'react';


class PersonCardComponent extends Component{
    constructor(props) {
        super(props);
        }
        render() {
            const {firstname, lastname, age, haircolor} = this.props;
            
            return (
                <div>
                    <h2>{firstname} {lastname} </h2>
                    <p>{age}</p>
                    <p>{haircolor}</p>
                </div>
            );
        }
    }
export default PersonCardComponent;

