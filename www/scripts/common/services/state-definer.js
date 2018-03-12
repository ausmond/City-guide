(function() {
	'use strict';

	angular
		.module('listing.common')
		.provider('stateDefiner', stateDefiner);

	stateDefiner.$inject = ['$stateProvider'];

	/* @ngInject */
	function stateDefiner($stateProvider) {
		var tabs = ['home', 'map', 'search', 'favorites'];

		return {
			$get: function() {
				return {
					tabs: tabs,
					define: define
				};
			}
		}

		// *****************************************************************

		function define(options) {

			_.each(tabs, function(tab) {
				defineState(tab, options);
			});
		}

		function defineState(suffix, options) {
			var tab = 'tab-' + suffix;
			suffix = suffix || '';

			var views = {};
			views[tab] = {
				templateUrl: options.templateUrl,
				controller: options.controller + ' as vm'
			};

			$stateProvider
				.state(options.state + (suffix ? ('-' + suffix) : ''), {
					url: (suffix ? ('/' + suffix) : '') + options.url,
					views: views,
					resolve: options.resolve
				});
		}
	}
})();
