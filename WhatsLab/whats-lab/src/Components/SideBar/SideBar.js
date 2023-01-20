import React from 'react'
import "./SideBar.css"
import { Avatar, IconButton} from '@material-ui/core'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from '../SidebarChat/SidebarChat';




function Sidebar ()  {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar/>
                <div className='sidebar__headerRight'>
                    <IconButton>
                    <DonutLargeIcon/>
                        </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                    
                </div>
                
            </div>

            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                <SearchOutlined/>
                <input placeholder='Pesquisar ou começar uma nova conversa' type="text"/>
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar