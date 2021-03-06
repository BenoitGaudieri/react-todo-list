import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./Todolist.css";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };

        // Functions binds
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    // Functions to pass to children components
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo],
        });
    }

    remove(id) {
        this.setState({
            todos: this.state.todos.filter((t) => t.id !== id),
        });
    }

    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                // change only the matching task with the updatedTask and return everything else (in this case the id)
                return { ...todo, task: updatedTask };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    // Class toggle
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        const todos = this.state.todos.map((todo) => {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    removeTodo={this.remove}
                    updateTodo={this.update}
                    toggleTodo={this.toggleCompletion}
                />
            );
        });
        return (
            <div className="todolist">
                <h1>
                    Todo list
                    <span>Your todos in a simple React Todo List App</span>
                </h1>
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        );
    }
}
