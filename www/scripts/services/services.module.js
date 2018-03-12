(function() {
	'use strict';

	angular
		.module('listing.services', [
			'ionic',
			'listing.common'
		])
		.config(function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();

			stateDefiner.define({
				templateUrl: 'scripts/services/services.html',
				controller: 'ServicesController',
				state: 'app.services',
				url: '/businesses/:businessId/services'
			});
			stateDefiner.define({
				templateUrl: 'scripts/services/service.html',
				controller: 'ServiceController',
				state: 'app.service',
				url: '/businesses/:businessId/services/:serviceId'
			});
		});
})();