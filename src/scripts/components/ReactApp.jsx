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

var TicTacToeCell = React.createClass({
	render: function() {
		return (<td onClick={this.handleClick}>{this.props.value}</td>);
	},
	handleClick: function(e) {
	  console.log(this.props.value);	
	}
});

var TicTacToeBoard = React.createClass({
	render: function() {
		var drawRow  = function(val) {
			return <tr><TicTacToeCell value={val[0]} /><TicTacToeCell value={val[1]} /><TicTacToeCell value={val[2]} /></tr>;
		}
		return (<table>{this.props.board.map(drawRow)}</table>);
  }
});

var ReactApp = React.createClass({
	getInitialState: function() {
		return {board: [["1","2","3"], ["4","5","6"], ["7","8","9"]], text: ''};	
	},
  render: function() {
    return (
      <div className='main'>
				<h3>Tic Tac Toe!</h3>
				<TicTacToeBoard board={this.state.board} />
      </div>
    );
  }
});

module.exports = ReactApp;
