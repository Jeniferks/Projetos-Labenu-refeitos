import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "../SideBar/SideBar.css"

function SidebarChat() {
    const [seed, setSeed] = useState("")

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000 ))
    }, [])


    
    return (
        <div className='sidebarChat'>
            <Avatar src={`https://api.dicebear.com/api/human/${seed}.svg`}
  alt="avatar"/>
            <div className='sidebarChat__info'>
                <h2>Nome</h2>
                <p>mensagem...</p>
            </div>
        </div>
    )
}

export default SidebarChat