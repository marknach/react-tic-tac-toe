/** @jsx React.DOM */

var ReactApp = require('./ReactApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={ReactApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
