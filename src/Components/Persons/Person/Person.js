import React, {Component} from "react";
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from "../../../hoc/withClass";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
// import Radium from "radium";
// Convert function to class Component
//const person = (props) => 
class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        // this is older approach before react 16.2
        // this.inputElementRef.current.focus();
        this.inputElement.focus();
        console.log(this.context.authenticated);
    }
    render(){
        console.log('[Person.js] redenring...')
        return (
        <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
    
        <div>
        <h1>My name is Burhan & I am {Math.floor(2023-1999)} years old.</h1>
        <p onClick={this.props.click}> He is my friend name {this.props.name}  {this.props.children}</p>
        <input
        type="text"
        ref={(inputEl) => {this.inputElement = inputEl}}
        // ref={this.inputElement} 
        onChange={this.props.changed}
        value={this.props.name} />
    </div>
    
    </Aux>
    )
    }
    // console.log('[Person.js] redenring...')
    // using Radium
    // const style ={
    //     '@media (min-width : 500px)' :{
    //         width : '450px'
    //     }
    // };
    // in return section place in div (style={style})
    // return (<div className="Person" >
    //     <h1>My name is Burhan & I am {Math.floor(2023-1999)} years old.</h1>
    //     <p onClick={props.click}> He is my friend name {props.name}  {props.children}</p>
    //     <input onChange={props.changed} />
    // </div>
    // )
};
// Use in Radium
// export default Radium(person);
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);