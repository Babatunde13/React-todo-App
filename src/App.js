import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import axios from 'axios';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import './App.css';
import Header from './components/layout/Header'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Users from './components/pages/Misc';

class App extends  React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 2,
        title: 'Eat lunch',
        completed: true
      },
      {
        id: 3,
        title: 'Write code',
        completed: true
      }
    ],
    name:''
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        todo.completed = todo.id === id? !todo.completed: todo.completed
        return todo;
      }),
      name: ''
    });
  }

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    });
  }

  addTodo = (title) => {
    let newTodo = {
      id: this.state.todos.length+1,
      title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  addName =(e) => {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos],
      name: e.target.value
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header addName={this.addName} name={this.state.name} />
            <Route exact path='/' render={props => (
              <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={ this.markComplete } 
                  delTodo={this.delTodo} />
             </React.Fragment>
            )} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/user/:name' component={Users} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

