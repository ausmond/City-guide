(function() {
	'use strict';

	angular
		.module('listing.products')
		.controller('ProductsController', ProductsController);

	ProductsController.$inject = ['$scope', '$stateParams', 'productsService', 'state'];

	/* @ngInject */
	function ProductsController($scope, $stateParams, productsService, state) {
		var businessId = $stateParams.businessId;

		var vm = angular.extend(this, {
			products: [],
			showProductDetails: showProductDetails
		});

		(function() {
			loadProducts();
		})();
		// ******************************************************

		function loadProducts() {
			productsService.getItems(businessId).then(function(data) {
				vm.products = data;
			});
		}

		function showProductDetails(productId) {
			state.go('app.product', {
				businessId: businessId,
				productId: productId
			});
		}
	}
})();