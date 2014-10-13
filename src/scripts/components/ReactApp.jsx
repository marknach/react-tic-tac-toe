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

var curPlayer = "X";

var TicTacToeCell = React.createClass({
	render: function() {
		return (<span className="cell" onClick={this.handleClick}>{this.props.value}</span>);
	},
	handleClick: function() {
		this.props.cellClicked(this.props.key, this.props.player);
	}
});

var Board = React.createClass({
	getInitialState: function() {
		return { board:  [
								" "," "," ",
								" "," "," ",
								" "," "," ",
							], player: "X"};	
	},
	cellClicked: function(position, player) {
		var board = this.state.board;
		if ( board[position] != " " ) { return; }
		board[position] = player;
		this.setState({board: board, player: player === "X" ? "O" : "X"});
  },
  render: function() {
    return (
      <div className='main'>
				{
					this.state.board.map(function(cell, pos) {
							return <TicTacToeCell value={cell} key={pos} player={this.state.player} cellClicked={this.cellClicked} />;
					}, this)
				}
      </div>
    );
  }
});

module.exports = Board;
