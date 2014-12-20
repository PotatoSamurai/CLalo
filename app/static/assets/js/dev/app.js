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

		// $routeProvider
		// 	.when('/', {
		// 		templateUrl: 'view/home/'
		// 	}).when('/about', {
		// 		templateUrl: 'view/about/'
		// 	})
		// 	// .when('/chat', {
		// 	// 	templateUrl: 'view/chat/'
		// 	// }).when('/faq', {
		// 	// 	templateUrl: 'view/faq/'
		// 	// }).when('/forum', {
		// 	// 	templateUrl: 'view/forum/'
		// 	// }).when('/help', {
		// 	// 	templateUrl: 'view/help/'
		// 	// })
		// 	.when('/404', {
		// 		templateUrl: 'view/404/'
		// 	}).otherwise({
		// 		redirectTo: '/404'
		// });

		$interpolateProvider.startSymbol('{[{').endSymbol('}]}');

		// use the HTML5 History API
		$locationProvider.html5Mode(false);
	}]);
	return app;
});
