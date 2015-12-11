/// <reference path="../angular.min.js" />
/// <reference path="c:\users\kapil.bagul\documents\visual studio 2013\Projects\ProjectTrackingWebsite\ProjectTrackingWebsite\app.js" />

app.controller("ProjectController", function ($scope, ProjectService) {
    $scope.Title = "Project Details";

    ProjectService.Projects().then(function (data) {
       $scope.Projects = data;
    });

});