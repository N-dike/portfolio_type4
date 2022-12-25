import './Header.css'
import Letters from '../Animated/Letters/Letters'
import React from 'react'
import { ShowComponent } from '../ShowComponent/ShowComponent'
import Typed from 'react-typed'

const Header = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  const nameArray = [' ', 'J', 'e', 'r', 'e', 'm', 'i', 'a', 'h']
  const titleArray = [ ' ', 'f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ']
  return (
    <ShowComponent>
        <header className= "header-container">
          <div className="header">
            <h1 className="greetings">
              <Typed strings={['HELLO AND WELCOME, ', 'TO MY PERSONAL WEBSPACE.']} 
              className="animate"
              typeSpeed={50} 
              backDelay={2000} 
              fadeOut={true} 
              onComplete={(self)=> self.cursor.remove()}
              />
              <div className="fader-L"></div>
              <div className="fader fader-R"></div>
            </h1>
              <span className={letterClass}>I</span> 
              <span className={`${letterClass} _12`}> 'm</span>
              <Letters letterClass={letterClass}
              strArray={nameArray}
              idx={15} />
              <span className={`${letterClass} _12`}>,</span>
              <br />
              <span className={letterClass}>a</span>
              <Letters letterClass={letterClass}
              strArray={titleArray}
              idx={22} />
              <span className={letterClass}>
              and this is my web portfolio.
              </span>
          </div>
            <div className="image-div">
              <img src="/image/profile.png" alt="" className="profile" />
            </div>
        </header>
      </ShowComponent>
  )
}

export default Header