define(['./module'], function (services) {
	'use strict';

	services.service('auth-svc', [function() {
		var user_is_auth = false;

		this.set_user_auth = function(value) {
			user_is_auth = value;
		};
		this.get_user_auth = function() {
			return user_is_auth;
		};

		return this;
	}]);
});