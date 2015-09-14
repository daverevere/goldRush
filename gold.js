var app = angular.module("myApp", [])

app.controller("mainController", ["$scope", function($scope){
$scope.bug=false
$scope.clientY="500px"
$scope.clientX="500px"
$scope.map = function(event) {
$scope.bug=true
$scope.clientY=event.clientY.toString() + "px"
$scope.clientX=event.clientX.toString() + "px"
	console.log(event)
}





















	}])