import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
  }

  componmentWillReceiveProps() {
    console.log('will receive props');
  }

  shouldComponentUpdate() {
    console.log('should update');
  }

  componentWillUpdate() {
    console.log('will update');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
