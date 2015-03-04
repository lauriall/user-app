var Utils = {

    /**
     * Helper to avoid manual writing "success" and "error" handlers for $http calls.
     *
     * Usage: Utils.httpReq($http.get("api/statistics), onSuccess, onError);
     */
    httpReq : function(httpPromise, onSuccess, onError) {
        httpPromise.success(function(data, status, headers, config) {
            if (onSuccess) {
                onSuccess(data, status, headers, config);
            }
        }).error(function(data, status, headers, config) {
            if (onError) {
                onError(data, status, headers, config);
            }
        });

        return false;
    }
};

