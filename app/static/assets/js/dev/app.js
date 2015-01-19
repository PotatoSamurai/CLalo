/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */

define([
	'angular',
	'angular-route',
	'./directives/index',
	'./controllers/index',
	'./services/index'
], function (angular) {
	'use strict';

	var app = angular.module('app', ['ngRoute','app.directives','app.controllers','app.services']);

	app.config(['$routeProvider', '$locationProvider', '$interpolateProvider',function ($routeProvider, $locationProvider,$interpolateProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'static/views/home/index.html'
			}).when('/#404', {
				templateUrl: 'static/views/404/index.html'
			}).otherwise({
				redirectTo: '/#404'
		});

		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');

		// use the HTML5 History API
		$locationProvider.html5Mode(false);
	}]);
	return app;
});
