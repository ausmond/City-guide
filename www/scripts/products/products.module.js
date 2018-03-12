(function() {
	'use strict';

	angular
		.module('listing.products', [
			'ionic',
			'listing.common'
		])
		.config(function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();

			stateDefiner.define({
				templateUrl: 'scripts/products/products.html',
				controller: 'ProductsController',
				state: 'app.products',
				url: '/businesses/:businessId/products'
			});
			stateDefiner.define({
				templateUrl: 'scripts/products/product.html',
				controller: 'ProductController',
				state: 'app.product',
				url: '/businesses/:businessId/products/:productId'
			});
		});

})();