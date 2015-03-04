'use strict';

angular.module('userApp.edit', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users/:userId', {
        templateUrl: 'user/edit.html',
        controller: 'UserEditController'
    });
}]).controller('UserEditController', [ '$scope', '$routeParams','$location', 'UserService', function($scope, $routeParams, $location, UserService) {

    $scope.user = {
        name: "",
        email: "",
        roles: []
    };

    $scope.loadUser = function() {
        var userId = $routeParams.userId;
        if(userId === "new") return;
        UserService.getUserById(userId, function(data) {
            $scope.user = data;
        });
    }();

    $scope.addUser = function(user) {
        UserService.addUser(user, function() {
            $location.path("/users");
        });
    };

    $scope.removeUser = function(user) {
        UserService.removeUser(user, function() {
            $location.path("/users");
        });
    };

}]);