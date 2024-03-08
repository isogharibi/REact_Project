import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import'./app.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='nav_bar'>
        <a className='link' href="https://e-commers.iapp.ir/public/home.html"><div>ECOMMERS_IR</div></a>
        <div>
          <ul>
            <li>home</li>
            <li>products</li>
            <li>blog</li>
          </ul>
        </div>
        <div><button>login</button></div>
      </nav>
      <div className='output'></div>
    </>
  )
}

export default App
