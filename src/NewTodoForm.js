import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
        };

        // Functions binds
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // the React form logic to write value in the state
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }

    // use the parent createTodo to pass a new todo with the setted task, id from uuid and set completed state to false.
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({ ...this.state, id: uuid(), completed: false });
        // empty the field
        this.setState({ task: "" });
    }

    render() {
        return (
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">Todo: </label>
                <input
                    type="text"
                    placeholder="New Todo"
                    id="task"
                    name="task"
                    value={this.state.task}
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        );
    }
}
