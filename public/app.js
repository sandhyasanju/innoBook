var app = angular.module("myApp", ["ngRoute","ui.bootstrap"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller : "homeCtrl"
    })
    .when("/login", {
        templateUrl : "views/login.html",
        controller : "loginCtrl"
    })
    .when("/editprofile", {
        templateUrl : "views/editprofile.html",
        controller : "loginCtrl"
    })
    .when("/profile", {
        templateUrl : "views/profile.html",
        controller : "profileCtrl"
    })
}).controller('myCtrl', function($scope){
  console.log("main controller");
});