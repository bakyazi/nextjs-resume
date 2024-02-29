import React, { useState, useEffect } from 'react'
import ReactStars from "react-rating-stars-component";
import { faJs, faJava, faPython, faReact, faVuejs, faGolang } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Gopher, Python, JavaScript, Spring, ReactLogo, Vue, Ubuntu, Centos, Jenkins, Travis, Jira, Bitbucket, Github, Java, MacOs } from '../components/icons';
export function Skill({ icon, skill, rate }) {
    return (
        <>
            {icon}
            {skill}
            <ReactStars isHalf={true} size={25} edit={false} value={rate} />
        </>
    )
}

const iconMap = {
    golang: <Gopher />,
    java: <Java />,
    python: <Python />,
    javascript: <JavaScript />,
    spring: <Spring />,
    react: <ReactLogo />,
    vue: <Vue />,
    ubuntu: <Ubuntu />,
    centos: <Centos />,
    jenkins: <Jenkins />,
    travisci: <Travis />,
    jira: <Jira />,
    bitbucket: <Bitbucket />,
    github: <Github />,
    macos: <MacOs />
}


export default function Skills() {

    const [items, setItems] = useState(undefined)

    useEffect(async () => {
        const data = await fetch('/resume.json')
        let js = await data.json()
        setItems(js)
    }, [])


    return (
        <div className='site-container'>
            <div className='skills-sections '>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Programming Languages</label>
                    <div className='skills-container'>
                        {
                            items && items.skills.programming_languages
                                .map(
                                    pl =>
                                        <div className='rate-card'><Skill skill={pl.name} rate={pl.rank} icon={iconMap[pl.key]} /></div>
                                )
                        }
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Frameworks</label>
                    <div className='skills-container'>
                        {
                            items && items.skills.frameworks
                                .map(
                                    pl =>
                                        <div className='rate-card'><Skill skill={pl.name} rate={pl.rank} icon={iconMap[pl.key]} /></div>
                                )
                        }

                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Operating Systems</label>
                    <div className='skills-container'>
                        {
                            items && items.skills.operating_systems
                                .map(
                                    pl =>
                                        <div className='rate-card'><Skill skill={pl.name} rate={pl.rank} icon={iconMap[pl.key]} /></div>
                                )
                        }
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>CI/CD</label>
                    <div className='skills-container'>
                        {
                            items && items.skills.ci_cd
                                .map(
                                    pl =>
                                        <div className='rate-card'><Skill skill={pl.name} rate={pl.rank} icon={iconMap[pl.key]} /></div>
                                )
                        }
                    </div>
                </div>
                <div className='skills-section'>
                    <label className='text-left text-cyan-700'>Tools</label>
                    <div className='skills-container'>
                        {
                            items && items.skills.tools
                                .map(
                                    pl =>
                                        <div className='rate-card'><Skill skill={pl.name} rate={pl.rank} icon={iconMap[pl.key]} /></div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
} 
