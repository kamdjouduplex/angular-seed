'use strict';

// Declare app level module which depends on views, and components
angular.module('dede', [
  'ngRoute',
  'dede.profile',
  'dede.post',
  'dede.home',
  'dede.settings',
  'dede.services',
  'dede.user', 
  'dede.version'
])
.constant('baseUrl', 'http://sellnbuy.iceteck.com/rest_sm/index.php')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
