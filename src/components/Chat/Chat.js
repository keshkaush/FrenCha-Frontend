import React, {
    useState,
    useEffect
} from 'react'
import queryString from "query-string"
import io from "socket.io-client"
import Infobar from "../Infobar/Infobar"
import "./Chat.css"
import Input from '../Input/Input'
import Messages from '../Messages/Messages'

let socket;

function Chat({
    location
}) {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState([])
    const [message, setMessage] = useState([])
    const [messages, setMessages] = useState('')

    const ENDPOINT = 'https://socket-chatting-react.herokuapp.com/'

    useEffect(() => {
        const {
            name,
            room
        } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)
        
        socket.emit('join', { name, room }, (error) => {
            if(error) console.log('socket error manuall - ', error);
        });

        return () => {
            // for disconnecting
            socket.emit('disconnect')
            // for turning off the socket instance
            socket.off()
        }
    }, [location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users)
        })
    }, [messages])

    
    function sendMessage(event) {
        event.preventDefault()

        
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    console.log(messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <Infobar RoomName={room} users={users} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat