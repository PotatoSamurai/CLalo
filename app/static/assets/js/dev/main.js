/*
// Common JS
// Date: dicember 2014
// Developers:
// 	Juan Venegas - jrvboesch@gmail.com
// Description:
// 	This is the first JS file that's loaded.
// 	Takes care of the require.config which has
// 	the js paths and starts the app
// -----------------------------------------------------
*/

// Rule of thumb:
// 	Define: If you want to declare a module other parts of your application will depend on.
// 	Require: If you just want to load and use stuff.

require.config({
	baseUrl: "static/assets/js/dev",
	paths: {
		// The Libraries we use
		'angular': [
			'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0-beta.13/angular.min' // CDNJS
		],
		'angular-route': [
			'http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0-beta.13/angular-route.min' // CDNJS
		],
		'domReady': [
			'http://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min' //CDNJS
		],
		'hammerjs': [
			'http://cdnjs.cloudflare.com/ajax/libs/hammer.js/1.1.3/hammer'  //CDNJS
		],
		'app': 		'app',
		'bootstrap':'bootstrap'
	},
	shim: {
		'angular': {
			exports: 'angular'
				},
		'angular-route': {
            deps: ['angular']
        }
	},
	deps: [
		// kick start application...
		'./bootstrap'
	]
});
