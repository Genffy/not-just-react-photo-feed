import Vue from 'vue';
import angular from 'angular';
import ReactDOM from 'react-dom';
import React from 'react';
import './app.css';

// =========== angular
class mainCtr {
	constructor ($scope) {
		$scope.message = "Hello Angular.js!"
	}
}
angular.module("angular",[]).controller("mainCtr", mainCtr)

// =========== react
var Databind = React.createClass({
	getInitialState: function() {
		return {message: 'Hello React!'}
	},
	handleChange: function(e) {
		console.log(e.target.value);
		this.setState({message: e.target.value});
	},
	render: function() {
		return (
			<div>
				<p>{this.state.message}</p>
				<input type='text' value={this.state.message} onChange={this.handleChange}/>
			</div>
		)
	}
});
ReactDOM.render(<Databind />,document.getElementById('react'));

// =========== angular
new Vue({
	el: '#vue',
	data: {
		message: 'Hello Vue.js!'
	}
})