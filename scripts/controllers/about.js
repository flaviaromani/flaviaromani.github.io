'use strict';

/**
 * @ngdoc function
 * @name frbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frbApp
 */
angular.module('frbApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
