import React, { useState } from 'react'

import InfoModal from '../components/infomodal'

import useContact from '../hooks/useContact'
import Contactform from '../components/contactform'
import Socialbar from '../components/socialbar'

export default function Socials() {


  const [onSubmit,
    email, setEmail,
    title, setTitle,
    message, setMessage,
    finished, setFinished,
    failed, setFailed] = useContact()


  return (
    <>

      <div className="site-container social-container">
        <Socialbar></Socialbar>
        <Contactform
          onSubmit={onSubmit}
          email={email} setEmail={setEmail}
          title={title} setTitle={setTitle}
          finished={finished} setFinished={setFinished}
          failed={failed} setFailed={setFailed}
          message={message} setMessage={setMessage}></Contactform>
      </div>
    </>
  )
}
