import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RouterPrincipal from './routers/RouterPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterPrincipal/>
  )
}

export default App
