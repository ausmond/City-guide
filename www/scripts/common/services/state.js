(function() {
	'use strict';

	angular
		.module('listing.common')
		.factory('state', state);

	state.$inject = ['$state', '$ionicTabsDelegate', 'stateDefiner'];

	/* @ngInject */
	function state($state, $ionicTabsDelegate, stateDefiner) {
		return {
			go: go
		}

		// *****************************************************************

		function go(stateName, options) {
			var index = $ionicTabsDelegate.selectedIndex();
			var tab = stateDefiner.tabs[index];

			stateName = stateName + '-' + tab;

			$state.go(stateName, options);
		}
	}
})();
