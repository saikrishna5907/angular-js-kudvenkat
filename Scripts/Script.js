/// <reference path="angular.min.js" />
var myApp = angular.module("myModule", [])

myApp.controller("myController", function ($scope) {
    var employee = [
            { firstName: "sai", lastName: "krishna", gender : "Male" },
            { firstName: "krishna", lastName: "tej", gender : "Male" },
            { firstName: "rajesh", lastName: "dev", gender  : "Male" },
            { firstName: "ravi", lastName: "samanchi", gender :  "Male"},
             ];
    $scope.employee = employee;
});