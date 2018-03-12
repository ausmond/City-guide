(function() {
	'use strict';

	angular
		.module('listing.catalogs')
		.controller('CatalogsController', CatalogsController);

	CatalogsController.$inject = ['$scope', '$stateParams', 'catalogsService', 'state'];

	/* @ngInject */
	function CatalogsController($scope, $stateParams, catalogsService, state) {
		var businessId = $stateParams.businessId;

		var vm = angular.extend(this, {
			catalogs: [],
			openCatalog: openCatalog
		});

		(function activate() {
			loadCatalogs();
		})();
		// ******************************************************

		function loadCatalogs() {
			catalogsService.getItems(businessId).then(function(data) {
				vm.catalogs = data;
			});
		}

		function openCatalog(catalogId) {
			state.go('app.catalog', {
				businessId: businessId,
				catalogId: catalogId
			});
		}
	}
})();