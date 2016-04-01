'use strict';

/**
 * @ngdoc function
 * @name frbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frbApp
 */
angular.module('frbApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
