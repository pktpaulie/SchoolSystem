import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavHeader from './components/NavHeader'
// React Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavHeader/>
      </div>
    </>
  )
}

export default App