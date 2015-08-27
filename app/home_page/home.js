'use strict';

angular.module('dede.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home_page/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', 
	[
	'$scope', 
	'getUserService', 
	'addUserService', 
	'updateUserService', 
	'deleteUserService',
	'singleUserService',  
	function($scope, getUserService, addUserService, updateUserService, deleteUserService, singleUserService) {
	$scope.users = getUserService.query();
	//console.log($scope.users);

	$scope.getCurrentUser = function(userId){
		$scope.curretUser = singleUserService.query({user:userId});
		//console.log($scope.curretUser.id);
	}

	$scope.addUser = function(){
		//var user
		addUserService.save({
			"firstname":"Fossa",
			"lastname":"Martin",
			"email":"fossa@gmail.com",
			"language":"francais",
			"location":"Dschang",
			"connectstatus":"1",
			"password":"fossa",
			"profileurl":"",
			"status":"",
			"trust":"2",
			"untrust":"1",
			"phone":679552357
		});
	}

	$scope.updateUser = function(userId){
		updateUserService.update({
			"id":userId,
			"firstname":"marie",
			"lastname":"toure",
			"email":"marie@gmail.com",
			"language":"english",
			"location":"Dschang",
			"connectstatus":"0",
			"password":"kamdjou",
			"profileurl":"",
			"status":"",
			"trust":"2",
			"untrust":"1",
			"phone":670274538
		});
	}

	$scope.deleteUser = function(userId){
		if(alert('are you sure you want to permanently delete this ?')){
			deleteUserService.delete({user:userId});
		}
	}
}]);