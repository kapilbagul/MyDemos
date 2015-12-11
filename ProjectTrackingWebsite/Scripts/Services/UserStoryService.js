/// <reference path="../angular.min.js" />
/// <reference path="c:\users\kapil.bagul\documents\visual studio 2013\Projects\ProjectTrackingWebsite\ProjectTrackingWebsite\app.js" />

app.factory("UserStoryService", function ($http) {

    var UserStory = function () {
        return $http.get("http://localhost:51537/api/UserStories/").then(function (response) {
            return response.data;
        }, function (reason) {
            return reason.data;
        });
    };

    var addUserStory = function (userStory) {
        return $http.post("http://localhost:51537/api/UserStories/" , userStory).then(function (response) {
            return response.data;
        }, function (reason) {
            return reason.data;
        });
    };

    return {
        UserStory: UserStory,
        addUserStory:addUserStory
    };
});