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
  render: function () {
    return (<span className="cell" onClick={this.handleClick}>{this.props.value}</span>);
  },
  handleClick: function () {
    this.props.cellClicked(this.props.key, this.props.player);
  }
});

var Menu = React.createClass({
  render: function () {
    return (<span className={this.props.winner !== "none" ? "menu-show" : "menu-hidden"} onClick={this.props.restartGame}>Again?</span>);
  }
});

var Board = React.createClass({
  getInitialState: function () {
    return { board: [
      "", "", "",
      "", "", "",
      "", "", "",
    ], player: "X", winner: "none"};
  },
	restartGame: function() {
		this.setState(this.getInitialState());
	},
  getWinner: function () {
    var b = this.state.board;
    var match = function (x, y, z) {
      return (x + y + z).match(/^(XXX|OOO)$/);
    };
    var winner = match(b[0], b[1], b[2])
      || match(b[3], b[4], b[5])
      || match(b[6], b[7], b[8])
      || match(b[0], b[3], b[6])
      || match(b[1], b[4], b[7])
      || match(b[2], b[5], b[8])
      || match(b[0], b[4], b[8])
      || match(b[2], b[4], b[6]);
    return (winner && winner.input[0]) || (b.join('').length < 9 ? "none" : "draw");
  },
  cellClicked: function (position, player) {
    var board = this.state.board;
    if (board[position] != "" || this.state.winner !== "none") {
      return;
    }
    board[position] = player;
    this.setState({board: board, player: player === "X" ? "O" : "X", winner: this.getWinner()});
  },
  render: function () {
    var classes = 'main';
    if (this.state.winner !== "none") {
      classes += ' fade-enter';
    }
    return (
      <div>
        <Menu winner={this.state.winner} restartGame={this.restartGame} />
        <div className={classes}>
			 {
         this.state.board.map(function (cell, pos) {
           return <TicTacToeCell value={cell} key={pos} player={this.state.player} cellClicked={this.cellClicked} />;
         }, this)
         }
        </div>
      </div>
      );
  }
});

module.exports = Board;
