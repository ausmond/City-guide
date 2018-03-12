(function() {
	'use strict';

	angular
		.module('listing.reviews', [
			'ionic'
		])
		.config(function(stateDefinerProvider) {
			var stateDefiner = stateDefinerProvider.$get();

			stateDefiner.define({
				templateUrl: 'scripts/reviews/reviews.html',
				controller: 'ReviewsController',
				state: 'app.reviews',
				url: '/businesses/:businessId/reviews',
				resolve: {
					addReviewModal: function($ionicModal, $rootScope) {
						return $ionicModal.fromTemplateUrl('scripts/reviews/add-review.html', {
							scope: $rootScope,
							animation: 'slide-in-up'
						});
					}
				}
			});
		});

})();