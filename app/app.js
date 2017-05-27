'use strict';

// Declare app level module which depends on views, and components
angular.module('graphAnything', [
  'ngRoute',
  'graphAnything.view1',
  'graphAnything.view2',
  'graphAnything.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
