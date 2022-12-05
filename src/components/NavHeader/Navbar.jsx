import './Header.css'
import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [clicked, setClicked] = React.useState(false);
  console.log(clicked);

  return (
    <nav className="container">
    <div className= "navbar">
    <ul className="navbar-nav" >
        <Link duration={500} offset={-200} to="/" smooth={true} style={{textDecoration: "none"}}>
            <li className="navbar-link">HOME</li>
        </Link>
        <Link duration={500} offset={-70} to="/about" smooth={true} style={{textDecoration: "none"}}>
            <li className="navbar-link">ABOUT</li>
        </Link>
        <Link duration={500} offset={-70} to="/portfolio" smooth={true} style={{textDecoration: "none"}}>
            <li className="navbar-link">PROJECTS</li>
        </Link>
        <Link duration={500} offset={-70} to="/contacts" smooth={true} style={{textDecoration: "none"}}>
            <li className="navbar-link">CONTACT ME</li>
        </Link>
    </ul>
    </div>
    {/*  for mobile */}
<div className="nav-checkbox" style = {{ width:  clicked ? "100%" : "0"}}>
    <ul className="navbar-nav" >
        <Link duration={500} offset={-200} to="/" smooth={true} style={{textDecoration: "none"}}>
            <li className="navbar-link" onClick={() => {setClicked((curr) => !curr)}}>
                HOME
            </li>
        </Link>
        <Link duration={500} offset={0} to="/about" smooth={true} style={{textDecoration: "none"}}>
            <li className="navbar-link" onClick={() => {setClicked((curr) => !curr)}}>
                ABOUT
            </li>
        </Link>
        <Link duration={500} offset={0} to="/portfolio" smooth={true} style={{textDecoration: "none"}}>
            <li className="navbar-link" onClick={() => {setClicked((curr) => !curr)}}>
                PROJECTS
            </li>
        </Link>
        <Link duration={500} offset={-70} to="/contacts" smooth={true} style={{textDecoration: "none"}}>
            <li className="navbar-link" onClick={() => {setClicked((curr) => !curr)}}>
                CONTACT ME
            </li>
        </Link>
    </ul>
    <div onClick={() => {setClicked((curr) => !curr)}} />
    </div>
<div className="logo">
      <img src="image/N.png" alt="" className="img" onClick={() => {setClicked((curr) => !curr)}} />
</div>
    </nav>
  )
}

export default Navbar