(function() {
	'use strict';

	angular
		.module('listing.drupal', [
			'ionic',
			'listing.common'
		])
		.config(function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();

			stateDefiner.define({
				templateUrl: 'scripts/drupal/drupal-articles.html',
				controller: 'DrupalArticlesController',
				state: 'app.drupal-articles',
				url: '/drupal-articles'
			});
			stateDefiner.define({
				templateUrl: 'scripts/drupal/drupal-article.html',
				controller: 'DrupalArticleController',
				state: 'app.drupal-article',
				url: '/drupal-articles/:articleId'
			});
		});
})();