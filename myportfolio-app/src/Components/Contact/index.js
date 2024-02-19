import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
// import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])

  const sendEmail = (e) => {
    e.preventDefault()

   emailjs.init('YcN6qvrGSEm1Od8Bn');
    emailjs.send("service_ky2nw1p","template_d28gypi",)

      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
          <span className={`${letterClass} _15`}>C</span>
            <span className={`${letterClass} _16`}>o</span>
            <span className={`${letterClass} _16`}>n</span>
            <span className={`${letterClass} _17`}>t</span>
            <span className={`${letterClass} _18`}>a</span>
            <span className={`${letterClass} _18`}>c</span>
            <span className={`${letterClass} _19`}>t</span>
            <span className={`${letterClass} _20`}> </span>
            <span className={`${letterClass} _21`}>M</span>
            <span className={`${letterClass} _22`}>e</span>
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form  ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Shubham Palve,
          <br />
          Trimurti Chowk,
          <br />
          Pune,411046 <br />
          Maharashtra <br />
          <br />
          <span>shubhampalve704@gmail.com</span>
        </div>
         <div className="map-wrap">
          {/* <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer> */}
        </div> 
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact