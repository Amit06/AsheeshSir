var controllerModule = angular.module('blank.controllers', []);

controllerModule.controller("demoController", function($scope, $ionicModal, $timeout, $cordovaOauth){
  $scope.loginData = {};
  $scope.bd_src='img/bd.png';
  $scope.logo2_src='img/logo2.png';
  $scope.fbLogin = function () {
    console.log("clicked");
    $cordovaOauth.facebook("572778666263598", ["email","public_profile"],{redirect_uri: "http://localhost/callback"}).then(function(result) {
        // results
        console.log(result);
    }, function(error) {
        // error
        console.log(error);
    });
      };
});
