'use strict';

angular.module('userApp.list', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl: 'user/list.html',
        controller: 'UserListController'
    });
}]).controller('UserListController', [ '$scope', 'UserService', function($scope, UserService) {

    $scope.users = [];

    $scope.loadUsers = function() {
        UserService.getUsers(function(data) {
            $scope.users = data;
        });
    }();

}]);