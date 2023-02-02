import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { SearchOutlined } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect, useState } from 'react'
import "./Chat.css"
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import firebase from "../../firebase"
import { useStateValue } from '../../StateProvider';
import { serverTimestamp } from '@firebase/firestore'


const Chat = () => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const { roomId } = useParams()

    const [roomName, setRoomName] = useState("")
    const [messages, setMessages] = useState([])
    const [{user}, dispatch] = useStateValue()

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));
            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    

    const sendMessage = (e) => {
        e.preventDefault();
        console.log("Voce digitou:", input)

        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: serverTimestamp(),
        })

        setInput("")
    };

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://api.dicebear.com/api/human/${seed}.svg`}
                    alt="avatar"  />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>
                        Visto por ultimo as {""}  { new Date(
                            messages[messages.length -1]?.timestamp?.toDate()
                        ).toUTCString()}
                    </p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>
            <div className='chat__body'>
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`}>
                    <span className='chat__name'>
                        {message.name}
                    </span>
                    {message.message}
                    <span className='chat__timestamp'>
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>


                </p>
                ))}

            </div>
            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Digite sua mensagem' type="text" />
                    <button onClick={sendMessage}>Enviar mensagem</button>
                </form>
                <MicIcon />
            </div>

        </div>
    )
}

export default Chat