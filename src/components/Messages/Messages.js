import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
import Message from '../Message/Message'
import "./Messages.css"


function Messages({ messages, name }) {
    return (
        <ScrollToBottom className="messages">
            {
                messages.length === 0 ? null : messages.map((message, i) =>
                <div key={`message#${i}`}>
                    <Message message={message} name={name}/>
                </div>)
            }
        </ScrollToBottom>
    )
}

export default Messages
