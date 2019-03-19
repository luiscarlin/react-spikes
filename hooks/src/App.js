import React, { Component } from 'react';
import './App.css';
import UseStatePractice from './UseStatePractice'
import Refactoring from './BeforeRefactoring'
import AfterRefactoring from './AfterRefactoring';
import UseEffectPractice from './UseEffectPractice';

const examples = [
  <UseStatePractice/>,
  <Refactoring />,
  <AfterRefactoring/>,
  <UseEffectPractice/>
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
