/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var TodoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return <li>{itemText}</li>;
		}
		return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var ReactApp = React.createClass({
	getInitialState: function() {
		return {items: [], text: ''};	
	},
	onChange: function(e) {
		this.setState({text:e.target.value});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var nextItems = this.state.items.concat([this.state.text]);
		var nextText = '';
		this.setState({items: nextItems, text: nextText});
	},
  render: function() {
    return (
      <div className='main'>
				<h3>TODO</h3>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.text}/>
					<button>{'Add #' + (this.state.items.length + 1)}</button>
				</form>
				<TodoList items={this.state.items} />
      </div>
    );
  }
});

module.exports = ReactApp;
