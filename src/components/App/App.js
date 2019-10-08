import React, { Component } from 'react';

import { MathAdd } from '../MathAdd';
import { MathMultiply } from '../MathMultiply';
import { MathResult } from '../MathResult';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { hello: undefined };

  async componentDidMount() {
    const response = await fetch(`/hello${window.location.search}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ start: new Date().getTime() }),
    });
    const json = await response.json();
    this.setState({ hello: json });
  }

  render() {
    const { hello } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <MathAdd />
            <MathMultiply />
            <div>
              <MathResult />
            </div>
          </div>
          <pre>hello: {JSON.stringify(hello, null, 2)}</pre>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
