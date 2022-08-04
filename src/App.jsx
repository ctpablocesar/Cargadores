import { useState } from 'react'
import reactLogo from './assets/logo.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  )
}

export default App
