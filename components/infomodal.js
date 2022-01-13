import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
export default function InfoModal({ onClose }) {

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 bg-opacity-40">
            <FontAwesomeIcon size="2x" icon={faExclamation} />
          </div>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-cyan-700">
              Not implemented yet! <br/>Please contact me via social media.
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              onClick={() => { onClose() }}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}
