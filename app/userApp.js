'use strict';

angular.module('userApp', [
  'ngRoute',
  'userApp.services',
  'userApp.list',
  'userApp.edit'
]).config(['$routeProvider', function($routeProvider) {

    $routeProvider.otherwise({redirectTo: 'users'});

}]);
