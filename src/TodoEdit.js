import React, { Component } from 'react';
import './Todo.css';

export default class TodoEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit_submit: this.props.todo,
			edit_toggle: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleToggle(evt) {
		this.props.toggleTodo(this.props.id);
	}

	/* This is just a toggle for the form triggered by a button */
	handleEdit() {
		this.setState({
			edit_toggle: !this.state.edit_toggle
		});
	}

	/* Uses the function from parent passing the id and the new edited text */
	handleUpdate(evt) {
		evt.preventDefault();
		this.props.update(this.props.id, this.state.edit_submit);
		this.handleEdit();
	}

	/* Usual handleChange for forms */
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	render() {
		let result;
		if (this.state.edit_toggle) {
			result = (
				<div className="todo">
					<form className="Todo-edit-form" onSubmit={this.handleUpdate}>
						<label htmlFor="edit_submit" />
						<input
							type="text"
							name="edit_submit"
							value={this.state.edit_submit}
							onChange={this.handleChange}
						/>
						<button>Edit</button>
					</form>
				</div>
			);
		} else {
			result = (
				<div className="todo">
					<ul>
						<li
							onClick={this.handleToggle}
							className={this.props.completed ? 'todo-task completed' : 'todo-task'}
						>
							{this.props.todo}
						</li>
					</ul>
					<div className="todo-buttons">
						<button onClick={this.handleEdit}>
							<i class="fas fa-pen" />
						</button>
						<button onClick={this.props.remove}>
							<i class="fas fa-trash" />
						</button>
					</div>
				</div>
			);
		}
		return <div>{result}</div>;
	}
}
