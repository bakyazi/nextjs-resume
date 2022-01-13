import React from 'react'
import ReactStars from "react-rating-stars-component";
import { faJs, faJava, faPython, faReact, faVuejs, faGolang } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GopherLogo from '../components/gopherlog';
export function Skill({ icon, skill, rate }) {
    return (
        <>
            {icon}
            {skill}
            <ReactStars size={25} edit={false} value={rate} />
        </>
    )
}


export default function Skills() {
    return (
        <div className='site-container'>
            <div className='skills-container'>
                <div className='rate-card'><Skill skill="Java" rate={5} icon={<FontAwesomeIcon size="4x" icon={faJava} />} /></div>
                <div className='rate-card'><Skill skill="Python" rate={5} icon={<FontAwesomeIcon size="4x" icon={faPython} />} /></div>
                <div className='rate-card'><Skill skill="Golang" rate={4} icon={<GopherLogo />} /></div>
                <div className='rate-card'><Skill skill="JavaScript" rate={4} icon={<FontAwesomeIcon size="4x" icon={faJs} />} /></div>
                <div className='rate-card'><Skill skill="React" rate={4} icon={<FontAwesomeIcon size="4x" icon={faReact} />} /></div>
                <div className='rate-card'><Skill skill="Vue" rate={3} icon={<FontAwesomeIcon size="4x" icon={faVuejs} />} /></div>
            </div>
        </div>
    )
} 
