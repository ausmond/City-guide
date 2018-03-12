(function() {
	'use strict';

	angular
		.module('listing.map', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.map', {
					url: '/map',
					views: {
						'tab-map': {
							templateUrl: 'scripts/map/map.html',
							controller: 'MapController as vm'
						}
					},
					resolve: {
						pins: function(mapService) {
							return mapService.getPins();
						},
						common: function(mapService) {
							return mapService.getCommon();
						}
					}
				});
		});
})();
