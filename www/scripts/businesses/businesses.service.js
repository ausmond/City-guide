(function() {
	'use strict';

	angular
		.module('listing.businesses')
		.factory('businessesService', businessesService);

	businessesService.$inject = ['dataService', '$q', '_'];

	/* @ngInject */
	function businessesService(dataService, $q, _) {
		var service = {
			getBusinesses: getBusinesses,
			getBusinessesByCategory: getBusinessesByCategory,
			getBusiness: getBusiness,
			getCommon: getCommon,
			getCategories: getCategories
		};
		return service;

		// ***************************************************************

		function getCategories() {
			return dataService.getCategories();
		};

		function getBusinesses() {
			return dataService.getBusinesses();
		}

		function getBusinessesByCategory(category, featured) {
			return dataService.getBusinessesByCategory(category, featured);
		}

		function getBusiness(businessId) {
			return dataService.getBusiness(businessId);
		}

		function getCommon() {
			return dataService.getCommon();
		}
	}
})();
