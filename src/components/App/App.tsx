import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <form>
      <label>Name</label>
      <input type="text" name="name"/>
      App</form>
  )
}

export default App
