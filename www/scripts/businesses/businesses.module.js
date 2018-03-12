(function() {
	'use strict';

	angular
		.module('listing.businesses', [
			'ionic',
			'ngCordova',
			'LocalStorageModule',
			'listing.common',
			'ionic-toast'
		])
		.config(function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();

			stateDefiner.define({
				templateUrl: 'scripts/businesses/business.html',
				controller: 'BusinessDetailsController',
				state: 'app.business-details',
				url: '/businesses/:businessId',
				resolve: {
					business: function($stateParams, businessesService) {
						return businessesService.getBusiness($stateParams.businessId);
					}
				}
			});

			stateDefiner.define({
				templateUrl: 'scripts/businesses/businesses.html',
				controller: 'BusinessesController',
				state: 'app.businesses',
				url: '/businesses?category',
				resolve: {
					filterModal: function($ionicModal, $rootScope) {
						return $ionicModal.fromTemplateUrl('scripts/businesses/filter.html', {
							scope: $rootScope,
							animation: 'slide-in-up'
						});
					}
				}
			});
		});
})();
