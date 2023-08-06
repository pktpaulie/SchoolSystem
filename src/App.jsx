import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Clubs/>
      <hr/>
      <Routes>
        <Route path = '/Clubs' element={<Clubs/>}/>
      </Routes>
    </div>
    /*{
      <>
      <div>
        <Nav/>
      </div>
    </>
  )
}

export default App
