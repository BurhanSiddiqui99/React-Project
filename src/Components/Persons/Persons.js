import React, { PureComponent } from "react";
import Person from './Person/Person';

//const persons = props =>
class Persons extends PureComponent {

   // static getDerivedStateFromProps(props,state){
   //    console.log('[Persons.js] getDerivedStateFromProps');
   //    return state;
   // }

   // now we are checking all props we simply comment his and using PureComponent instead of Component the working is same

   // shouldComponentUpdate(nextProps, nextState){
   //    console.log('[Persons.js] shouldComponentUpdate');
   //    if (nextProps.person !== this.props.person ||
   //       nextProps.changed !== this.props.person ||
   //       nextProps.clicked !== this.props.person) {
   //       return true;   
   //    }else {
   //       return false;
   //    }
      
   // }
   
   getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('[Persons.js] getSnapshotBeforeUpdate');
      return {message : 'Snapshot'};
   }

   componentDidUpdate(prevProps, prevState, snapshot){
      console.log('[Persons.js] componentDidUpdate');
      console.log(snapshot)
   }
   componentWillUnmount(){
      console.log('[Persons.js] componentWillUnmount')
   }

   render() {
      console.log('[Persons.js] rendering...');
      return this.props.persons.map((person, index) => {
        return (
          <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            key={person.id}
            changed={event => this.props.changed(event, person.id)}
          />
        );
      });
    }
}
export default Persons;