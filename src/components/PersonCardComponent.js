import React from 'react';

// As a class component:

// class PersonCardComponent extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             clickage: props.age
//         }
//     }
//     handleClick = () => {
//         this.setState({
//             clickage: this.state.clickage + 1
//         })
//     }

//     render() {
//         const {firstname, lastname, haircolor} = this.props;
        
//         return (
//             <div>
//                 <h2>{firstname} {lastname} </h2>
//                 <p>{this.state.clickage}</p>
//                 <p>{haircolor}</p>
//                 <button onClick={this.handleClick}>Birthday button for {firstname} {lastname}</button>
//             </div>
//         );
//     }
// }

    
// export default PersonCardComponent;

//As a functional component:

const PersonCardComponent = props => {
        return (
            <div>
                <h2>{props.firstname} {props.lastname} </h2>
                <p>Age: {props.age}</p>
                <p>Hair: {props.haircolor}</p>
            </div>
        );

}
export default PersonCardComponent;

