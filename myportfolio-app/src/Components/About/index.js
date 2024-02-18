import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import FontAwesomeIcon
import {
  faReact,
  faHtml5,
  faCss3,
  faJsSquare,
  faGitAlt,
  faNode,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'
// import '../Layout/index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _15`}>A</span>
            <span className={`${letterClass} _16`}>b</span>
            <span className={`${letterClass} _16`}>o</span>
            <span className={`${letterClass} _17`}>u</span>
            <span className={`${letterClass} _18`}>t </span>
            <span className={`${letterClass} _18`}> </span>
            <span className={`${letterClass} _19`}>M</span>
            <span className={`${letterClass} _20`}>e</span>
          </h1>
          <p>
            An independent and self-motivated student on the quest of an
            opportunity for an entry-level position in the software development
            that can acquaint me with knowledge and experience.
          </p>
          <p>
            I'm a 20-year-old Engineering student with a keen interest in
            software development and machine learning. I'm deeply passionate
            about continuously acquiring knowledge in emerging technologies.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#66b344" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default About
