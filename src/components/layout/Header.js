import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component{
    // state = {
    //     title: ''
    // };

    // handleInput = (e) => {
    //     this.setState({title: e.target.valie})
    //     console.log(this.state.title)
    // }
    render () {
        return(
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link to='/' style = {linkStyle}>Home</Link>{' '}| {' '}
                <Link to='/about' style = {linkStyle}>About</Link>{' '}| {' '}
                <Link to='/contact' style = {linkStyle}>Contact</Link>{' '}| {' '}
                <Link to='/user/babatunde' style = {linkStyle}>Babatunde</Link>
            </header>
        )
    }
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