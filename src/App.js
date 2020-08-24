import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import './App.css';
import Header from './components/layout/Header'
import About from './components/pages/About';

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
    ]
  }

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        todo.completed = todo.id === id? !todo.completed: todo.completed
        return todo;
      }) 
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

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markComplete={ this.markComplete } 
                  delTodo={this.delTodo} />
             </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

