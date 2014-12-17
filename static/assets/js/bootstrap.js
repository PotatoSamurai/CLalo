/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */

define(['require','angular','app'],function (require, ng, app) {
	'use strict';

	// Init procedures should go here

	// require(['domReady!'], function (document) {

		ng.bootstrap(document, ['app']);
	// });
});
