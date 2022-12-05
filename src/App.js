import './App.css';
import Header from './components/NavHeader/Header'
import Navbar from './components/NavHeader/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'
import Layout from './layout/Layout';
import React, { useState } from 'react'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = (e) => {
    e.preventDefault()
    if(theme === 'light') {
      setTheme('dark');
    }else {
      setTheme('light');
    }
  }
  React.useEffect(() => {
    document.body.className = theme;
  }, [theme])
  return (
    <div className= {`App ${theme}`}>
      <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element= {<Layout />}>
          <Route path="/header" element={<Header />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/about" element={<Contact />}/>
        </Route>
      </Routes>
      <button className='change-mode' onClick={toggleTheme}> s</button>
      <Footer />
      </div>
    </div>
  );
}

export default App;
