(function() {
	'use strict';

	angular
		.module('listing.news')
		.controller('ArticlesController', ArticlesController);

	ArticlesController.$inject = ['$stateParams', 'newsService', 'state'];

	/* @ngInject */
	function ArticlesController($stateParams, newsService, state) {
		var businessId = $stateParams.businessId;

		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate
		});

		// ********************************************************************

		newsService.getItems(businessId).then(function(data){
			vm.articles = data;
		});

		function navigate(articleId) {
			state.go('app.article', {
				businessId: businessId,
				articleId: articleId
			});
		}
	}
})();