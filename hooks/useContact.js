import { useState } from 'react'

export default function () {

    const [email, setEmail] = useState('')
    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [finished, setFinished] = useState(true)
    const [failed, setFailed] = useState(false)

    const resolveResponse = (response, isError) => {
        var isFailed = isError || !response.ok
        setEmail("")
        setTitle("")
        setMessage("")
        setFinished(true)
        setFailed(isFailed)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        // showModalSet(true)
        setFinished(false)
        await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, title, message })
        }).then(res => {
            resolveResponse(res, false)
        }).catch(err => {
            resolveResponse(err, true)
        })
    }

    return [onSubmit, email, setEmail, title, setTitle, message, setMessage, finished, setFinished, failed, setFailed]
}