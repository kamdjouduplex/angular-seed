'use strict';

angular.module('dede.post', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post', {
    templateUrl: 'single_post_page/post_details.html',
    controller: 'PostCtrl'
  });
}])

.controller('PostCtrl', [function() {

}]);