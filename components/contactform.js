import React, { useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InfoModal from './infomodal';

export default function Contactform({ onSubmit, email, title, message, setEmail, setTitle, setMessage, finished, setFinished, failed, setFailed }) {


    return (
        <>
            {failed && <InfoModal onClose={() => { setFailed(false) }}></InfoModal>}
            <div className={'contact-form'}>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <div className="contact-form-field">
                            <label className='contact-form-label'>E-mail</label>
                            <input className='contact-form-input' type="text" name="name" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                        </div>
                        <div className="contact-form-field">
                            <label className='contact-form-label'>Title</label>
                            <input className='contact-form-input' type="text" name="title" value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                        </div>
                        <div className="contact-form-field">
                            <label className='contact-form-label'>Message</label>
                            <textarea className='contact-form-input' name="message" cols="30" rows="8" value={message} onChange={(e) => { setMessage(e.target.value) }}></textarea>
                        </div>
                        <button className={'contact-form-button'} type="submit">{!finished && <FontAwesomeIcon className={"animate-spin button-icon"} icon={faSpinner} />}Send</button>
                    </div>
                </form>
            </div>
        </>
    );
}
