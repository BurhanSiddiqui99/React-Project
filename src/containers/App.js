// import logo from './logo.svg';
// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Radium, {StyleRoot} from 'radium';

// Class based Component
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
    //now initial the down state into there because the down state is modern JS syntax and it is old
  }

  state = {
    // name : 'Dabeer' Single entry
    //Array Entry
    persons: [
      { id : '1', name: 'Dabeer' },
      { id : '2', name: 'Hassan' },
      { id : '3', name: 'Hammad' }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentWillUnmount(){
    console.log('[App.js] componentWillUnmount');
  }

  // switchNameHandler = (newName) => {
  //   // console.log("Successfully Done")
  //   this.setState({
  //     person: [
  //       { name: 'Dabeer Ahmed' },
  //       { name: newName }
  //     ]
  //   })

  // }
  nameChangedHandler = (event, id) => {
    // console.log("Successfully Done")
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { persons: persons ,
         changeCounter: prevState.changeCounter + 1
        };
  });
  };

  deletePersonHandler = (personIndex) => {
    // This is use to pass the main Array and perform functions directly in it (this is not a good practice)
    // const person = this.state.person;
    
    //This is use to save the previous and Array and perform the actions this is good practice but we use ES6 uproach 
    // const person = this.state.person.slice();
    
    // This is ES6 uproach to save the previuos Array and perform action on to the new Array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  loginHandler = () => {
    this.setState({authenticated: true})
  }
  render() {
    // Inline CSS in React
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid black',
    //   padding: '8px',
    //   cursor: 'pointer',
      // Use in Radium
      // ':hover' : {
      //   backgroundColor : 'lightgreen',
      //   color : 'black'
      // }
      
    // };
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated = {this.state.authenticated}
        /> )
          // {/* {this.state.person.map((person, index) => {
          //   return <Person
          //   click = {() => this.deletePersonHandler(index)}
          //   name = {person.name}
          //   key = {person.id}
          //   changed = {(event) => this.nameChangedHandler(event, person.id)}
          //    />
             
          // })} */}
          // {/* The output list convert into an Array in the upper map function */}
          // {/* <Person name="Hassan"> He is like reading </Person> */}
          // {/* Single Entry line */}
          // {/* <Person name = { this.state.name}>He is like coding</Person> */}


          // {/* Multiple Entry (Array)  */}
          // {/* <Person name={this.state.person[0].name}>He is like coding</Person> */}
          // {/* <Person name={this.state.person[1].name} click={this.switchNameHandler.bind(this, 'Hammad Aslam')} */}
          //   {/* changed={this.nameChangedHandler} */}
          // {/* >He is a Content Writer</Person> */}
      
      
      
      // style.backgroundColor = 'red';
      // Use in Radium
      // style[':hover'] = {
      //   backgroundColor : 'salmon',
      //   color : 'black'
      // }
    }

    // const classes = []
    // if (this.state.person.length <= 2){
    //   classes.push('red');
    // }
    // if (this.state.person.length <= 1){
    //   classes.push('bold');
    // }

    return (
      // Use in Radium
      // <StyleRoot>
      // the class of css will call at the end 
      // <Aux classes={classes.App}>
        <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.tooglePersonHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
        </Aux>
      //   {/* <h1>This is a react App</h1>
      // //   <p className={classes.join(' ')}>This is really working now!</p> */}
      //   {/* <button onClick={this.switchNameHandler.bind(this, 'Hammad?')} >Switch</button> */}
      //   {/* Another way to write the upper line */}
      //   {/* <button
      // style={style} 
      // onClick={() => this.switchNameHandler('Hammad?') }>Switch</button> */}
      //   {/* <button 
      //     style={style}
      //     onClick={this.tooglePersonHandler}>Show Data</button> */}
      //   {
      //     // Basic Method 
      //     // this.state.showPerson === true ?
      //     // <div>
      //     //         <Person name = "Hassan"> He is like reading </Person>
      //     //   {/* Single Entry line */}
      //     //   {/* <Person name = { this.state.name}>He is like coding</Person> */}


      //     //   {/* Multiple Entry (Array)  */}
      //     //   <Person name = { this.state.person[0].name}>He is like coding</Person>
      //     //   <Person name={this.state.person[1].name} click = {this.switchNameHandler.bind(this, 'Hammad Aslam')}
      //     //   changed={this.nameChangedHandler }
      //     //   >He is a Content Writer</Person>
      //     // </div> : null 
      //   }
      //   {/* Advance Method */}
        
      // </StyleRoot> Use in Radium

    );
    // return React.createElement('div', {className : 'App'}, React.createElement('h1',null,'This is another App'));
  }
}

// React 16.8 version function based Component using Hook
// const App = props => {
//   const [personState, setPersonState] = useState({
//     person: [
//       { name: 'Dabeer' },
//       { name: 'Hammad' }
//     ],
//   });

//   const switchNameHandler = () => {
//     // console.log("Successfully Done")
//     setPersonState({
//       person: [
//         { name: 'Dabeer Ahmed' },
//         { name: 'Hammad' }
//       ]
//     });

//   };

//   return (
//     <div className="App">
//       <h1>This is a react App</h1>
//       <button onClick={switchNameHandler} >Switch</button>
//       <Person name="Hassan"> He is like reading </Person>
//       {/* Single Entry line */}
//       {/* <Person name = { this.state.name}>He is like coding</Person> */}


//       {/* Multiple Entry (Array)  */}
//       <Person name={personState.person[0].name}>He is like coding</Person>
//       <Person name={personState.person[1].name} click = {switchNameHandler}>He is a Content Writer</Person>
//     </div>

//   );
//   // return React.createElement('div', {className : 'App'}, React.createElement('h1',null,'This is another App'));

// }
export default withClass(App, classes.App);
