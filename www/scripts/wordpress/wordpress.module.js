(function() {
	'use strict';

	angular
		.module('listing.wordpress', [
			'ionic',
			'listing.common'
		])
		.config(function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();

			stateDefiner.define({
				templateUrl: 'scripts/wordpress/wordpress-articles.html',
				controller: 'WordpressArticlesController',
				state: 'app.wordpress-articles',
				url: '/wordpress-articles'
			});
			stateDefiner.define({
				templateUrl: 'scripts/wordpress/wordpress-article.html',
				controller: 'WordpressArticleController',
				state: 'app.wordpress-article',
				url: '/wordpress-articles/:articleId'
			});
		});
})();