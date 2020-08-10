import React, { Component } from 'react';

export default class Todo extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						{this.props.new_todo}
						<button onClick={this.props.remove}>X</button>
					</li>
				</ul>
			</div>
		);
	}
}
