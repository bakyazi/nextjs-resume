import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import InfoModal from '../components/infomodal'
import Link from 'next/link'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

export default function Socials() {

  const [showModal, showModalSet] = useState(false)


  const onSubmit = (e) => {
    e.preventDefault()
    showModalSet(true)
  }

  return (
    <>
      {showModal && <InfoModal onClose={() => { showModalSet(false) }}></InfoModal>}
      <div className="site-container social-container">
        <div className='social-icons'>
        <div className="social-icon">
            <a href="mailto:berkay.akyazi@gmail.com" target="_blank" style={{ all: 'unset' }}>
              <FontAwesomeIcon size="2x" icon={faMailBulk} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/berkay-akyaz%C4%B1-a8b56310a/" target="_blank" style={{ all: 'unset' }}>
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://github.com/bakyazi" target="_blank" style={{ all: 'unset' }}>
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com/berkyzi" target="_blank" style={{ all: 'unset' }}>
              <FontAwesomeIcon size="2x" icon={faTwitter} />
            </a>
          </div>


          <div className="social-icon">
            <a href="https://www.instagram.com/berkyzi/" target="_blank" style={{ all: 'unset' }}>
              <FontAwesomeIcon size="2x" icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className='contact-form'>
          <form>
            <div className="form-group">
              <div className="contact-form-field">
                <label className='contact-form-label'>E-mail</label>
                <input className='contact-form-input' type="text" name="name" id="contact-form-name"></input>
              </div>
              <div className="contact-form-field">
                <label className='contact-form-label'>Message</label>
                <textarea className='contact-form-input' name="message" id="contact-form-message" cols="30" rows="8"></textarea>
              </div>
              <button className='contact-form-button' type="submit" onClick={onSubmit}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
