import React, {useState} from 'react'

export default () => {
  // value = You can name it whatever you want. The state.
  // setValue = You can name it whatever you want. Function that mutates the state. By default it just sets it.
  // useState = returns an array of state & mutator. Takes in the initial state.
  const [value, setValue] = useState('')

  // use setValue() to update the internal state
  return (
    <div>
      <h1>Current Value is="{value}"</h1>
      <input type="text" onChange={event => setValue(event.target.value)} value={value}/>
    </div>
  )
}
