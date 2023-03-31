import { useState } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Blog></Blog>
    </div>
  )
}

export default App
