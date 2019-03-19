import React, { Component } from 'react';
import './App.css';
import UseStatePractice from './useStatePractice'
import Refactoring from './Refactoring'

const examples = [
  <UseStatePractice/>,
  <Refactoring />
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
