/// <reference path="c:\users\kapil.bagul\documents\visual studio 2013\Projects\ProjectTrackingWebsite\ProjectTrackingWebsite\Scripts/angular.js" />
/// <reference path="c:\users\kapil.bagul\documents\visual studio 2013\Projects\ProjectTrackingWebsite\ProjectTrackingWebsite\Scripts/angular-route.min.js" />

var app = angular.module("app", ["ngRoute"])
                            .config(function ($routeProvider) {
                               
                                $routeProvider.when("/home", {
                                    templateUrl: "EmployeesList.html",
                                    controller: "EmployeesListController"
                                   
                                });
                               
                                $routeProvider.when("/EmployeesList", {
                                    templateUrl: "EmployeesList.html",
                                    controller: "EmployeesListController"
                                });

                                $routeProvider.when("/NewEmployee", {
                                    templateUrl: "NewEmployee.html",
                                    controller: "EmployeesListController"
                                    
                                });

                                $routeProvider.when("/EditEmployee/:EmployeeID", {
                                    templateUrl: "EditEmployee.html",
                                    controller: "EmployeesListController"

                                });

                                $routeProvider.when("/DeleteEmployee", {
                                    templateUrl: "EmployeesList.html",
                                    controller: "EmployeesListController"
                                });

                                $routeProvider.when("/Projects", {
                                    templateUrl: "/Projects/ProjectDetails.html",
                                    controller: "ProjectController"
                                });

                                $routeProvider.when("/UserStories", {
                                    templateUrl: "/UserStory/UserStoryDetails.html",
                                    controller:"UserStoryController"
                                });

                                $routeProvider.when("/NewUserStory", {
                                    templateUrl: "/UserStory/UserStoryInsert.html",
                                    controller: "UserStoryController"

                                });

                                $routeProvider.otherwise({redirectTo:"/home"})
                            });