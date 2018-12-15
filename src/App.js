import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from "antd";

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
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button>click</Button>
        </header>
      </div>
    );
  }
}

export default App;
