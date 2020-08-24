import React from 'react';
// import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <a href='/' style = {linkStyle}>Home</a>|<a href='/about' style = {linkStyle}>About</a>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign:'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

// <Link to='/' style={linkStyle} >Home</Link> 
// <Link to='/about' style={linkStyle} >Home</Link>