import React, { Component } from 'react';



class PersonCardComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            clickage: props.age
        }
    }
    handleClick = () => {
        this.setState({
            clickage: this.state.clickage + 1
        })
    }

    render() {
        const {firstname, lastname, haircolor} = this.props;
        
        return (
            <div>
                <h2>{firstname} {lastname} </h2>
                <p>{this.state.clickage}</p>
                <p>{haircolor}</p>
                <button onClick={this.handleClick}>Birthday button for {firstname} {lastname}</button>
            </div>
        );
    }
}

    
export default PersonCardComponent;

