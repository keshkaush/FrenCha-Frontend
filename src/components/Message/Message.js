import React from 'react'
import ReactEmoji from "react-emoji"
import "./Message.css"

function Message({message: {user, text}, name}) {
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();

    if (user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser?
            (<div className='messageContainer leftMsg'>
                <p className="sentText">{trimmedName}</p>
                <div className='messageBox backgroundBlue'>
                    <p className='messageText'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>)
            :
            (<div className='messageContainer rightMsg'>
                <div className='messageBox backgroundLight'>
                    <p className={'messageText'}>{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText">{user}</p>
            </div>)
    )
}

export default Message
