(function() {
	'use strict';

	angular
		.module('listing.products')
		.factory('productsService', productsService);

	productsService.$inject = ['dataService'];

	/* @ngInject */
	function productsService(dataService) {
		var service = {
			getItems: getItems,
			getItem: getItem
		};
		return service;

		// *******************************************************

		function getItems(businessId){
			return dataService.getProducts(businessId);
		}

		function getItem(businessId, productId) {
			return dataService.getProduct(businessId, productId);
		}
	}
})();
