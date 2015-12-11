/// <reference path="../angular.min.js" />
/// <reference path="c:\users\kapil.bagul\documents\visual studio 2013\Projects\ProjectTrackingWebsite\ProjectTrackingWebsite\app.js" />

app.controller("EditController", function ($scope, EmployeeService,$routeParams) {

    EmployeeService.getUserByID($routeParams.EmployeeID).then(function (response) {
        $scope.employeeList = response.data;
    }, function (reason) {
        $scope.error = reason.data;
    });

});