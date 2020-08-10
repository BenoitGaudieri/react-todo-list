import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm.js';
import TodoEdit from './TodoEdit.js';
import './Todolist.css';

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: []
		};
		this.addItem = this.addItem.bind(this);
		this.update = this.update.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}

	addItem(new_item) {
		this.setState({
			todo: [ ...this.state.todo, new_item ]
		});
	}

	remove(id) {
		this.setState({
			todo: this.state.todo.filter((todo) => todo.id !== id)
		});
	}

	update(id, updatedTodo) {
		const updatedTodos = this.state.todo.map((todo) => {
			if (todo.id === id) {
				/* it unpacks the todo so we don't lose the id, then reassign the todo (the "task" passed by the form) only to the new todo.  */
				return { ...todo, todo: updatedTodo };
			}
			return todo;
		});
		this.setState({ todo: updatedTodos });
	}

	toggleTodo(id) {
		const toggleComplete = this.state.todo.map((todo) => {
			if (todo.id === id) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		this.setState({ todo: toggleComplete });
	}

	render() {
		const todos = this.state.todo.map((todo) => (
			<TodoEdit
				{...todo}
				key={todo.id}
				update={this.update}
				toggleTodo={this.toggleTodo}
				remove={() => this.remove(todo.id)}
			/>
		));

		return (
			<div className="todolist">
				<h1>
					Todo List <span>A simple Todo List App made with React</span>{' '}
				</h1>
				{todos}
				<NewTodoForm addItem={this.addItem} />
			</div>
		);
	}
}
