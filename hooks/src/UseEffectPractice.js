import React, {useEffect, useState} from 'react'

export default () => {

  useEffect(() => {
    console.log('useEffect just ran!')
  })

  const [value, setValue] = useState('')

  return (
    <div>
      <h1>Look at the console for useEffect triggering</h1>
      <input type="text" onChange={event => setValue(event.target.value)} value={value}/>
    </div>
  )
}
