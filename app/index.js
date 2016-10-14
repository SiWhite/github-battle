var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '7c14f00dd5f5412fac091e52863d435b';
var sentryApp = '104831';
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
	name: 'Github Battle',
	branch: 'video4',
	version: '1.0'
}

Raven.config(sentryURL, {
	release: _APP_INFO.version,
	tags: {
		branch: _APP_INFO.branch,
		github_commit: '08284sdd093'
	}
}).install();


ReactDOM.render(
	routes,
	document.getElementById('app')
);