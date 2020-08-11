import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
        };

        // Functions binds
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    // toggle the form visualization
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleUpdate(evt) {
        evt.preventDefault();
        // take new task data and pass up to parent
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ isEditing: false });
    }

    // the React form logic to write value in the state
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    // Toggle completion style
    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="todo">
                    <form
                        className="Todo-edit-form"
                        onSubmit={this.handleUpdate}
                    >
                        <input
                            type="text"
                            value={this.state.task}
                            name="task"
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className="todo">
                    <li
                        onClick={this.handleToggle}
                        className={
                            this.props.completed
                                ? "todo-task completed"
                                : "todo-task"
                        }
                    >
                        {this.props.task}
                    </li>
                    <div className="todo-buttons">
                        <button onClick={this.toggleForm}>
                            <i className="fas fa-pen" />
                        </button>
                        <button onClick={this.handleRemove}>
                            <i className="fas fa-trash" />
                        </button>
                    </div>
                </div>
            );
        }
        return result;
    }
}
