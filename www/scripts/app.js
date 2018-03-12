// angular.module is a global place for creating, registering and retrieving Angular modules
// 'listing' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'listing.controllers' is found in controllers.js
angular.module('listing', [
	'ionic',
	'ionic.service.core',
	'ionic.service.push',
	'ngCordova',

	'firebase',
	'config',
	'gMaps',
	'ionic.rating',

	'listing.products',
	'listing.news',
	'listing.map',
	'listing.businesses',
	'listing.favorite-businesses',
	'listing.push',
	'listing.main',
	'listing.services',
	'listing.catalogs',
	'listing.contact-us',
	'listing.wordpress',
	'listing.drupal',
	'listing.reviews',
	'listing.home'
])

.value('_', window._)

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)

		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($urlRouterProvider) {
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});
