import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/NavHeader/Header'
import Portfolio from '../components/Portfolio/Portfolio'

const Layout = () => {
  return (
    <div id="/">
    <Header />
    <About />
    <Portfolio />
    <Contact />
    </div>
  )
}

export default Layout