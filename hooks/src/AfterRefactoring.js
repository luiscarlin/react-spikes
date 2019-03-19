import React, {useState} from 'react'

export default () => {

  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h1>HEY! Toggle is ON!</h1>}
    </div>
  )
}