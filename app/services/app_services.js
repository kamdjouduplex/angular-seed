'use strict';

angular.module('dede.services', ['ngResource'])

.factory('getUserService', ['$resource', 'baseUrl', function($resource, baseUrl){
	return $resource(
		baseUrl+'/users/all/:user', 
		{user:"@user"}
	);
}])

.factory('singleUserService', ['$resource', 'baseUrl', function($resource, baseUrl){
	return $resource(
		baseUrl+'/users/:user', 
		{user:"@user"}
	);
}])

.factory('addUserService', ['$resource', 'baseUrl', function($resource, baseUrl){
	return $resource(
		baseUrl+'/users/new/:user',
		{user: "@user"}
	);
}])

.factory('updateUserService', ['$resource', 'baseUrl', function($resource, baseUrl){
	return $resource(
		baseUrl+'/users/update/:user',
		{user: "@user"},
		{'update': {method: 'PUT'}}
	);
}])

.factory('deleteUserService', ['$resource', 'baseUrl', function($resource, baseUrl){
	return $resource(
		baseUrl+'/users/delete/:user',
		{user: "@user"}
	);
}])
