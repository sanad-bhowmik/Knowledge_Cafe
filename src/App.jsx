import { useState } from 'react'
import './App.css'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <hr />
      <Blog></Blog>
      <ToastContainer
        // {/* customize toast */}
        position="top-center"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer></Footer>
    </div>
  )
}

export default App
