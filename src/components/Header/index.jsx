import React from 'react'
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import './header.css'
import { Container } from '@material-ui/core'

const Header = () => {
    return (
        <Container className='warpper'>
            <div className='header'>
                <span onClick={() => window.scroll(0, 0)} >The Movie</span>
                <GroupWorkIcon className='icon' />
            </div>
        </Container>
    )
}

export default Header
