import React, { Component } from 'react';
import './App.css';
import UseStatePractice from './UseStatePractice'
import Refactoring from './BeforeRefactoring'
import AfterRefactoring from './AfterRefactoring';

const examples = [
  <UseStatePractice/>,
  <Refactoring />,
  <AfterRefactoring/>
]

class App extends Component {
  render() {
    return (
      <div>
        { examples.map((ex, idx) => <div className='section' key={idx}>{ex}</div>) }
      </div>
    );
  }
}

export default App;
