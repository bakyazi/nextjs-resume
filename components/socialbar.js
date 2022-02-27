import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
export default function socialbar() {
  return (
    <div className='social-icons'>
    <div className="social-icon">
        <a href="mailto:berkay.akyazi@gmail.com" target="_blank" style={{ all: 'unset' }}>
          <FontAwesomeIcon size="2x" icon={faMailBulk} />
        </a>
      </div>
      <div className="social-icon">
        <a href="https://www.linkedin.com/in/berkayakyazi/" target="_blank" style={{ all: 'unset' }}>
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

  );
}
