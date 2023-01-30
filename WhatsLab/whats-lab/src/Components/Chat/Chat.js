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


const Chat = () => {
    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")
    const {roomId} = useParams()

    const [roomName, setRoomName] = useState("")

    useEffect(() => {
        if (roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapchot => (
                setRoomName(snapchot.data().name)
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const date = new Date().toLocaleTimeString();

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log("Voce digitou:", input)
        setInput("")
    };

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://api.dicebear.com/api/human/${seed}.svg`}
                    alt="avatar" />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Visto por ultimo as...</p>
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

                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className='chat__name'>
                        Jenifer K Silveira
                    </span>
                    Oi pessoal
                    <span className='chat__timestamp'>
                        {date}
                    </span>


                </p>
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