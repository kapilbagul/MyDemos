/// <reference path="../angular.min.js" />

/// <reference path="c:\users\kapil.bagul\documents\visual studio 2013\Projects\ProjectTrackingWebsite\ProjectTrackingWebsite\app.js" />

var app = angular.module("app")
        .controller("EmployeesListController", function ($scope, $http, EmployeeService, $routeParams) {
            
            var onSuccess = function (data) {
                $scope.employeeList = data;
                $scope.sortBy = "EmployeeName";
              //  alert(response.data);
            }

            var updateSuccessCallBack = function (data) {
                $scope.employee = data;                
            }

            var OnFail = function (data) {
                $scope.error = data;
               
            }
            EmployeeService.getUser().then(onSuccess, OnFail);
           

            if ($routeParams.EmployeeID != undefined)
                EmployeeService.getUserByID($routeParams.EmployeeID).then(updateSuccessCallBack, OnFail);

            $scope.saveEmployee = function (employee) {
                EmployeeService.saveUser(employee).then(onSuccess, OnFail);
            }

            $scope.updateEmployee = function (employee) {
                //alert(JSON.stringify(employee));
                EmployeeService.updateUser(employee, $routeParams.EmployeeID).then(updateSuccessCallBack, OnFail);
            }

            $scope.DeleteEmployee = function (employee) {
                EmployeeService.DeleteEmployee(employee.EmployeeID).then(updateSuccessCallBack, OnFail);
            };


            var refresh = function () {
                EmployeeService.employees()
                    .then(onSuccess, OnFail);
            };

            refresh();
            

        });

