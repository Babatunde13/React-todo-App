import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component{

    render () {
        let path=`/user/${this.props.name}`
        return(
            <header style={headerStyle}>
                <h1>TodoList</h1>
                <Link to='/' style = {linkStyle}>Home</Link>{' '}| {' '}
                <Link to='/about' style = {linkStyle}>About</Link>{' '}| {' '}
                <Link to='/contact' style = {linkStyle}>Contact</Link>{' '}| {' '}
                <input type='text' 
                    name='name' 
                    placeholder='Enter name'
                    style = {{flex: '10', padding: '5px'}} 
                    onChange={this.props.addName} />{' '}| {' '}
                <Link to={path} style = {linkStyle}>{this.props.name}</Link>
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