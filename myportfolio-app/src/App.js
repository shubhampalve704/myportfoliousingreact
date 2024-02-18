// import logo from './logo.svg';
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout/index'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
