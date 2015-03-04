angular.module('userApp.services', []).factory('UserService', function($http) {

    var baseUri = "http://localhost:8080";

    return {
        getUsers: function(onSuccess, onError) {
            return Utils.httpReq($http.get(baseUri + "/api/users/"), onSuccess, onError);
        },
        getUserById: function(userId, onSuccess, onError) {
            return Utils.httpReq($http.get(baseUri + "/api/users/" + userId), onSuccess, onError);
        },
        addUser: function(user, onSuccess, onError) {
            return Utils.httpReq($http.post(baseUri + "/api/users/", user), onSuccess, onError);
        },
        removeUser: function(user, onSuccess, onError) {
            return Utils.httpReq($http.delete(baseUri + "/api/users/" + user.id), onSuccess, onError);
        }
    }
});