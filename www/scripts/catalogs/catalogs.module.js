(function() {
	'use strict';

	angular
		.module('listing.catalogs', [
			'ionic'
		])
		.config(function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();

			stateDefiner.define({
				templateUrl: 'scripts/catalogs/catalogs.html',
				controller: 'CatalogsController',
				state: 'app.catalogs',
				url: '/businesses/:businessId/catalogs'
			});
			stateDefiner.define({
				templateUrl: 'scripts/catalogs/catalog.html',
				controller: 'CatalogController',
				state: 'app.catalog',
				url: '/businesses/:businessId/catalogs/:catalogId'
			});
		});
})();