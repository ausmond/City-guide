(function() {
	'use strict';

	angular
		.module('listing.news', [
			'ionic',
			'listing.common'
		])
		.config(function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();

			stateDefiner.define({
				templateUrl: 'scripts/news/articles.html',
				controller: 'ArticlesController',
				state: 'app.articles',
				url: '/businesses/:businessId/articles'
			});
			stateDefiner.define({
				templateUrl: 'scripts/news/article.html',
				controller: 'ArticleController',
				state: 'app.article',
				url: '/businesses/:businessId/articles/:articleId'
			});
		});
})();