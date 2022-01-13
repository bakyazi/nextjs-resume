import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import InfoModal from '../components/infomodal'
import Link from 'next/link'

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
         <Link href="/redirect/twitter"><div className="social-icon" ><FontAwesomeIcon size="2x" icon={faTwitter} /></div></Link>
         <Link href="/redirect/github"><div className="social-icon" ><FontAwesomeIcon size="2x" icon={faGithub} /></div></Link>
         <Link href="/redirect/linkedin"><div className="social-icon" ><FontAwesomeIcon size="2x" icon={faLinkedin} /></div></Link>
         <Link href="/redirect/instagram"><div className="social-icon" ><FontAwesomeIcon size="2x" icon={faInstagram} /></div></Link>
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
