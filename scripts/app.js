'use strict';

/**
 * @ngdoc overview
 * @name frbApp
 * @description
 * # frbApp
 *
 * Main module of the application.
 */
angular
  .module('frbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl'
      // })
      .when('/film', {
        templateUrl: 'views/film.html',
        controller: 'FilmCtrl'
      })
      .when('/photography', {
        templateUrl: 'views/photography.html',
        controller: 'PhotographyCtrl'
      })
      .when('/illustration', {
        templateUrl: 'views/illustration.html',
        controller: 'IllustrationCtrl'
      })
      .when('/branding', {
        templateUrl: 'views/branding.html',
        controller: 'BrandingCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
