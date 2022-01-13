import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import Timeline from '../components/timeline'

export default function Resume() {

  const [items, setItems] = useState(undefined)
  const [downloadStyle, setDownloadStyle] = useState({ display: 'none', transition: "width 1s linear" })

  useEffect(async () => {
    const data = await fetch('/resume.json')
    let js = await data.json()
    setItems(js)
  }, [])

  const showDownloadText = (e) => {
    e.preventDefault()
    setDownloadStyle({ ...downloadStyle, display: 'block' });
  }

  const hideDownloadText = (e) => {
    e.preventDefault()
    setDownloadStyle({ ...downloadStyle, display: 'none' });
  }

  return (
    <>
      <div className="site-container flex justify-end items-center space-x-4">
        <a href="/cv.pdf">
          <div className='flex justify-end items-center text-cyan-700 hover:bg-cyan-700 hover:bg-opacity-60 p-1.5 rounded-md hover:text-white'
            onMouseEnter={showDownloadText}
            onMouseLeave={hideDownloadText}
          >
            <label style={downloadStyle}>Download CV</label>
            <FontAwesomeIcon size="2x" icon={faDownload} />
          </div>
        </a>

      </div>
      {
        items &&
        <div className="site-container">
          <Timeline title="Work Experience" items={items.workExperience} ></Timeline>
          <Timeline title="Education" items={items.education} ></Timeline>
        </div>
      }
    </>
  )
}
