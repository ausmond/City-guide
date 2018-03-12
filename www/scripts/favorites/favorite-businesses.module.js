(function() {
	'use strict';

	angular
		.module('listing.favorite-businesses', [
			'ionic',
			'ngCordova',
			'LocalStorageModule',
			'listing.common',
			'ionic-toast'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.favorites', {
					url: '/favorite-businesses/:random',
					views: {
						'tab-favorites': {
							templateUrl: 'scripts/favorites/favorite-businesses.html',
							controller: 'FavoriteBusinessesController as vm'
						}
					}
				});
		});
})();
