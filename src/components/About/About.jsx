import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ShowComponent } from '../ShowComponent/ShowComponent'
import { faCss3, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <ShowComponent>
      <div className="about-container" id="/about">
        <h1>
          About me
        </h1>
        <div className="about-content">
          <div className="text-zone">
            <p>I am a self taught, passionate and enthusiastic about new technololgies 
              and coding beautiful and responsive web apps.
            </p>

            <p>I am a juniour developer with over 2 years of experience 
              building web apps, creating responsive websites with a fast beautiful UI 
              all built with readable (These are what I consider my strengths 
              responsiveness and readability) and efficient code and of course using
              the best coding practices.
            </p>
          </div>
        <div className="the-cube">
          <div className="cube-spinner">
            <div className="face_1">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face_2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
            </div>
            <div className="face_3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
            </div>
            <div className="face_4">
              <FontAwesomeIcon icon={faJsSquare} color="#ECD81D"/>
            </div>
            <div className="face_5"></div>
            <div className="face_6"></div>
          </div>
        </div>
      </div>
      </div>
    </ShowComponent>
  )
}

export default About