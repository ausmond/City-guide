(function() {
	'use strict';

	angular
		.module('listing.businesses')
		.controller('BusinessesController', BusinessesController);

	BusinessesController.$inject = ['state', '$stateParams', 'businessesService', 'distanceService', 'filterModal', '_'];

	/* @ngInject */
	function BusinessesController(state, $stateParams, businessesService, distanceService, filterModal, _) {
		var category = $stateParams.category;
		var vm = angular.extend(this, {
			categories: null,
			selectedCategory: category || 'All',
			sortBy: 'name',
			businesses: [],
			navigate: navigate,
			filterByCategory: filterByCategory,
			showFilter: showFilter,
			featured: false
		});

		(function activate() {
			loadBusinesses();
			loadCategories();
		})();

		// ********************************************************************

		function applyFilters() {
			filterModal.hide();

			var scope = filterModal.scope;
			vm.selectedCategory = scope.vm.selectedCategory;
			vm.sortBy = scope.vm.sortBy;
			vm.featured = scope.vm.featured;
			loadBusinesses();
		}

		function showFilter() {
			var scope = filterModal.scope;
			scope.vm = {
				categories: vm.categories,
				selectedCategory: vm.selectedCategory,
				sortBy: vm.sortBy,
				featured: vm.featured,
				applyFilters: applyFilters
			};

			filterModal.show();
		}

		function filterByCategory(category) {
			vm.selectedCategory = category;
			loadBusinesses();
		}

		function loadCategories() {
			businessesService.getCategories().then(function(categories) {
				vm.categories = categories;
			});
		}

		function loadBusinesses() {
			businessesService.getBusinessesByCategory(vm.selectedCategory, vm.featured)
				.then(function(businesses) {
					vm.businesses = businesses;
					return businesses
				})
				.then(getDistances);
		}

		function navigate(businessId) {
			state.go('app.business-details', { businessId: businessId });
		}

		function getDistances(businesses) {
			var origins = _.map(businesses, function(business) {
				return business.officeLocation;
			})
			distanceService.getDistancesToOrigins(origins).then(function(distances) {
				for (var i = 0; i < businesses.length; i++) {
					businesses[i].distance = distances[i];
				}
			});
		}
	}
})();
