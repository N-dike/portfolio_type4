import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer-container">
        <p className="footer-p">
            Web development Portfolio for Nnadike Jeremiah Nnadike
        </p>
        <div className="socials-container">
            <a className = 'social-icons_1' href='https://github.com/N-dike' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className='social-icons_2' href='https://www.linkedin.com/in/nnadike-nnadike-800228225/' target='_blank' rel='noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    </footer>
  )
}

export default Footer