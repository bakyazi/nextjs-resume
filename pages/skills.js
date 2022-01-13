import React from 'react'
import ReactStars from "react-rating-stars-component";
import { faJs, faJava, faPython, faReact, faVuejs, faGolang } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Gopher, Python, JavaScript, Spring, ReactLogo, Vue, Ubuntu, Centos, Jenkins, Travis, Jira, Bitbucket, Github } from '../components/icons';
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
            <div className='skills-sections '>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Programming Languages</label>
                    <div className='skills-container'>
                        <div className='rate-card'><Skill skill="Java" rate={5} icon={<FontAwesomeIcon size="4x" icon={faJava} />} /></div>
                        <div className='rate-card'><Skill skill="Python" rate={5} icon={<Python />} /></div>
                        <div className='rate-card'><Skill skill="Golang" rate={4} icon={<Gopher />} /></div>
                        <div className='rate-card'><Skill skill="JavaScript" rate={4} icon={<JavaScript />} /></div>
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Frameworks</label>
                    <div className='skills-container'>
                        <div className='rate-card'><Skill skill="Spring" rate={5} icon={<Spring/>} /></div>
                        <div className='rate-card'><Skill skill="React" rate={4} icon={<ReactLogo />} /></div>
                        <div className='rate-card'><Skill skill="Vue" rate={3} icon={<Vue />} /></div>
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Operating Systems</label>
                    <div className='skills-container'>
                        <div className='rate-card'><Skill skill="Ubuntu" rate={5} icon={<Ubuntu/>} /></div>
                        <div className='rate-card'><Skill skill="CentOS" rate={4} icon={<Centos />} /></div>
                        <div className='rate-card'><Skill skill="CentOS" rate={4} icon={<Jenkins />} /></div>
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>CI/CD</label>
                    <div className='skills-container'>
                        <div className='rate-card'><Skill skill="Jenkins" rate={4} icon={<Jenkins />} /></div>
                        <div className='rate-card'><Skill skill="TravisCI" rate={2} icon={<Travis />} /></div>
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Tools</label>
                    <div className='skills-container'>
                        <div className='rate-card'><Skill skill="JIRA" rate={5} icon={<Jira />} /></div>
                        <div className='rate-card'><Skill skill="Bitbucket" rate={5} icon={<Bitbucket />} /></div>
                        <div className='rate-card'><Skill skill="GitHub" rate={5} icon={<Github />} /></div>
                    </div>
                </div>
                {/* <div className='rate-card'><Skill skill="JavaScript" rate={4} icon={<FontAwesomeIcon size="4x" icon={faJs} />} /></div> */}
            </div>
        </div>
    )
} 
