import React from 'react'
import './app.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import Navbar from './components/Navbar/Navbar'
import Offer from './components/Offers/Offer'
import Popular from './components/Popular/Popular'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    {/* <Offer/>
    <About/>
    <Blog/>
    <Footer/> */}

    </>
  )
}

export default App