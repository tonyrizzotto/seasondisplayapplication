import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  //You can directly initialize state outside of the constructor function
  state = { lat: null, errorMessage: '' };

  // Constructors are called instantly when a component is called. You do not need to define a constructor as Babel will automatically do that for you when you initialize state in the component.
  // constructor(props) {
  //   // Super is a reference to the parents(React) constructor function
  //   super(props);

  //   // This is the only time you do a direct assignment to this.state
  //   // this.state = { lat: null, errorMessage: '' };
  // }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // you call setState to update the initial state
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //React says we have to define a render method for every component
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept the location request" />;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
