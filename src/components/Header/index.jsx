import React from 'react'
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import VideocamIcon from '@material-ui/icons/Videocam';
import './header.css'

const Header = () => {
    return (
        <span onClick={() => window.scroll(0, 0)} className='header'>
            <GroupWorkIcon className='icon' />
            Movie React App
            <VideocamIcon className='icon' />
        </span>
    )
}

export default Header
