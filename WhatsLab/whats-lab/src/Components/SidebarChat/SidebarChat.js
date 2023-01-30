import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import db from '../../firebase'
import "./SidebarChat.css"


function SidebarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
            })
        }
    }


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
            <Avatar src={`https://api.dicebear.com/api/human/${seed}.svg`}
                alt="avatar" />
            <div className='sidebarChat__info'>
                <h3>{name}</h3>
                <p>mensagem...</p>
            </div>
        </div>
        </Link>
        
    ) : (
        <div onClick={createChat} className='sidebarChat'>
            <h2>Nova conversa</h2>
        </div>
    )
}

export default SidebarChat