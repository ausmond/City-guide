(function() {
	'use strict';

	angular
		.module('listing.home')
		.factory('homeService', homeService);

	homeService.$inject = [];

	/* @ngInject */
	function homeService() {
		var service = {
			getCategoryImages: getCategoryImages,
			getCityName: getCityName
		};
		return service;

		// ***************************************************************

		function getCityName(){
			var cityName = 'London';
			return cityName;
		}

		function getCategoryImages(){
      return [{
        key: 'Bars',
        image: 'misc/bars.png'
      },{
        key: 'Clothing',
        image: 'misc/clothing.png'
      },{
        key: 'Hotels',
        image: 'misc/hotels.png'
      },{
        key: 'Museums & Galleries',
        image: 'misc/museums-galleries.png'
      },{
        key: 'Restaurants',
        image: 'misc/restaurants.png'
      }]
    }
	}
})();
