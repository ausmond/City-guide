(function() {
	'use strict';

	angular
		.module('listing.services')
		.controller('ServicesController', ServicesController);

	ServicesController.$inject = ['$scope', '$stateParams', 'servicesService', 'state'];

	/* @ngInject */
	function ServicesController($scope, $stateParams, servicesService, state) {
		var businessId = $stateParams.businessId;

		var vm = angular.extend(this, {
			services: [],
			showServiceDetails: showServiceDetails
		});

		(function activate() {
			loadServices();
		})();
		// ******************************************************

		function loadServices() {
			servicesService.getItems(businessId).then(function(data) {
				vm.services = data;
			});
		}

		function showServiceDetails(serviceId) {
			state.go('app.service', {
				businessId: businessId,
				serviceId: serviceId
			});
		}
	}
})();