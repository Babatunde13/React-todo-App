import React from 'react';
import PropTypes from 'prop-types';

class TodoItem  extends  React.Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todo.completed? 
            'line-through' : 'none'
        }
    }


    render() {
        return (
            <div style = {this.getStyle()}>
                <p>
                    <input type='checkbox' onChange= {this.props.markComplete.bind(this, this.props.todo.id) }/> {' '}
                    { this.props.todo.title }
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>X</button>
                </p>
            </div>
    )
  }
}

const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer', 
    float: 'right'
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  };



export default TodoItem;
