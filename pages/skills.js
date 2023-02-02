import React from 'react'
import ReactStars from "react-rating-stars-component";
import { faJs, faJava, faPython, faReact, faVuejs, faGolang } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Gopher, Python, JavaScript, Spring, ReactLogo, Vue, Ubuntu, Centos, Jenkins, Travis, Jira, Bitbucket, Github, Java } from '../components/icons';
export function Skill({ icon, skill, rate }) {
    return (
        <>
            {icon}
            {skill}
            <ReactStars isHalf={true} size={25} edit={false} value={rate} />
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
                        <div className='rate-card'><Skill skill="Golang" rate={4.5} icon={<Gopher />} /></div>
                        <div className='rate-card'><Skill skill="Java" rate={4} icon={<Java />} /></div>
                        <div className='rate-card'><Skill skill="Python" rate={3.5} icon={<Python />} /></div>
                        <div className='rate-card'><Skill skill="JavaScript" rate={3.5} icon={<JavaScript />} /></div>
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Frameworks</label>
                    <div className='skills-container'>
                        <div className='rate-card'><Skill skill="Spring" rate={3.5} icon={<Spring/>} /></div>
                        <div className='rate-card'><Skill skill="React" rate={3} icon={<ReactLogo />} /></div>
                        <div className='rate-card'><Skill skill="Vue" rate={2.5} icon={<Vue />} /></div>
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Operating Systems</label>
                    <div className='skills-container'>
                        <div className='rate-card'><Skill skill="Ubuntu" rate={4.5} icon={<Ubuntu/>} /></div>
                        <div className='rate-card'><Skill skill="CentOS" rate={3.5} icon={<Centos />} /></div>
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>CI/CD</label>
                    <div className='skills-container'>
                        <div className='rate-card'><Skill skill="Jenkins" rate={3.5} icon={<Jenkins />} /></div>
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
            </div>
        </div>
    )
} 
