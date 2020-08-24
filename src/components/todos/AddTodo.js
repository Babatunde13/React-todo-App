import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    state = {
        title: ''
    }

    handleInput = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    submitForm = (e) => {
        e.preventDefault();
        if (this.state.title) {
            this.props.addTodo(this.state.title);
        } else {
            alert(`You haven't input anything`)
        }
        this.setState({
            title: ''
        })
    }

    render () {
        return (
            <form style = {{display: 'flex'}} onSubmit={this.submitForm}>
                <input 
                    type='text' 
                    name='title' 
                    placeholder='Add Todo...'
                    style = {{flex: '10', padding: '5px'}} 
                    onChange = {this.handleInput}
                    value={this.state.title} />
                <input 
                    type='submit' 
                    value='submit' 
                    className = 'btn' 
                    style = {{flex: '1'}} />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}