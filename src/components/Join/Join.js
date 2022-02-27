import React, {useState} from 'react'
import { Link } from "react-router-dom"
import "./Join.css"

function Join() {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <div className="heading">Join</div>
                <div><input placeholder="Name" className="joinInput" value={name} onChange={(event)=>{
                    setName(value => value = event.target.value)
                }} type="text" /></div>
                <div><input placeholder="Room" className="joinInput mt-20" value={room} onChange={(event)=>{
                    setRoom(value => value = event.target.value)
                }} type="text" /></div>
                <Link onClick={e => (!name || !room ? e.preventDefault() : null)} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">Join</button>
                </Link>
            </div>
        </div>
    )
}

export default Join
