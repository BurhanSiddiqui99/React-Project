import React from 'react';

// const withClass = props => (
//   <div className={props.classes}>{props.children}</div>
// );

// Another way to create this Component
// this is a simple javascript Function and inside it a Component Function
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  );
};

export default withClass;
