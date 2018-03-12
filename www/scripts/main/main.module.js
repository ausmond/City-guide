(function() {
	'use strict';

	angular
		.module('listing.main', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app', {
					url: '/app',
					abstract: true,
					templateUrl: 'scripts/main/main.html'
				});
			;
		});
})();