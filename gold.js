var app = angular.module("myApp", [])

app.controller("mainController", ["$scope", function($scope){
$scope.marks=[{x:"", y:""}]
$scope.map = function(event) {
	
	$scope.marks.push({x: event.clientX.toString() + "px", y: event.clientY.toString() + "px"})
	console.log(event)

	
}
$scope.remove = function(index){
	$scope.marks.splice(index, 1)
} 





















	}])