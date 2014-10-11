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

var TicTacToeBoard = React.createClass({
	render: function() {
		var drawRow  = function(val) {
			return <tr><td>{val[0]}</td><td>{val[1]}</td><td>{val[2]}</td></tr>;
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
