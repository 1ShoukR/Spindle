import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <h1>Welcome to Spindle</h1>
      </div>
      <div>
        <h2>A seamless platform for creating longform Threads posts. </h2>
      </div>
    </div>
  )
}

export default App
