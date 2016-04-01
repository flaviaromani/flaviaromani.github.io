'use strict';

/**
 * @ngdoc function
 * @name frbApp.controller:OverallCtrl
 * @description
 * # OverallCtrl
 * Controller of the frbApp
 */
angular.module('frbApp')
  .controller('OverallCtrl', function ($scope, $location) {

  	$scope.$watch(function() {
	   	return $location.path();
	}, 	function(){
	    $scope.currentPath = $location.path();
	});
    $scope.isActive = function (viewLocation) {
    	var active = viewLocation.indexOf($location.path()) > -1;
    	return active;
    }
  });
