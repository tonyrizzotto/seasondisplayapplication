import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// you can define default properties on a component, that defaults to what's in the object
Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
