'use strict';

/**
 * @ngdoc overview
 * @name pipboyClientApp
 * @description
 * # pipboyClientApp
 *
 * Main module of the application.
 */


angular
  .module('pipboyClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .value('endpoint', '127.0.0.1:3000/API')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/camera', {
        templateUrl: 'views/camera.html',
        controller: 'CameraCtrl',
        controllerAs: 'camera'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
