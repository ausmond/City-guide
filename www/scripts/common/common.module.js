(function() {
	'use strict';

	angular
		.module('listing.common', ['ionic'])
		.value('geolib', window.geolib)
		.value('convert', window.convert);
})();