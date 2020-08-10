import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './NewTodoForm.css';

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todo: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	/* Updates the state when filling the form through onChange */
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const newTodo = { ...this.state, id: uuid(), completed: false };
		this.props.addItem(newTodo);
		this.setState({ new_todo: '' });
	}

	render() {
		return (
			<div>
				<form className="NewTodoForm" onSubmit={this.handleSubmit}>
					<label htmlFor="todo">Todo: </label>
					<input
						type="text"
						placeholder="New Todo"
						name="todo"
						value={this.state.todo}
						onChange={this.handleChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}
