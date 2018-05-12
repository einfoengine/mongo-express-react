import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers/customers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Express + React</h1>
            <p>Hello This is Maruf's Express and react pack with sample customer data.</p>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
