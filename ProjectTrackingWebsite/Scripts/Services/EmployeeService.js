/// <reference path="../angular.min.js" />
/// <reference path="c:\users\kapil.bagul\documents\visual studio 2013\Projects\ProjectTrackingWebsite\ProjectTrackingWebsite\app.js" />

app.factory("EmployeeService", function ($http,$q) {
    var cachedEmployees;

    var employees = function () {
        if (cachedEmployees)
            return $q.when(cachedEmployees);

        return $http.get("http://localhost:51537/api/Employees")
            .then(function (response) {
                cachedEmployees = response.data;
                return response.data;
            });
    };

    var getUser = function () {
        return $http.get("http://localhost:51537/api/Employees")
            .then(function (response) {
                cachedEmployees=response.data;
            return response.data;
        });
    };

    var saveUser = function (employee) {
        return $http.post("http://localhost:51537/api/Employees", employee)
    };

    var getUserByID = function (Id) {
        
        return $http.get("http://localhost:51537/api/Employees/" + Id).then(function (response) {
            return response.data;
        });
    };

    var updateUser = function(employee,id){

        return $http.put("http://localhost:51537/api/Employees/" + id , employee).then(function(response){
            cachedEmployees = response.data;
            return response.data;
        });
    };

    var DeleteEmployee = function (id) {
        return $http.delete("http://localhost:51537/api/Employees/" + id).then(function (response) {
            cachedEmployees=response.data;
            return response.data;
        });
    };



    return {
        getUser: getUser,
        saveUser: saveUser,
        getUserByID: getUserByID,
        updateUser: updateUser,
        DeleteEmployee: DeleteEmployee,
        employees: employees

    };
});
