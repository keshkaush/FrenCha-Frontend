import React from 'react'
import "./Input.css"

function Input({message, setMessage, sendMessage}) {


    return (
        <form className="form">
            <input className="input" type="text" placeholder="Type a message..." value={message} onChange={(event) => {
                setMessage(event.target.value)
            }} onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null} />
            <button className="sendMessage" autoFocus onClick={e => message.toString() === '' ? e.preventDefault() :sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input
