var pigLatinApp = angular.module('pigLatinApp', ['ngRoute']);

pigLatinApp.config(function($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl : 'views/home.html',
      controller  : 'HomeController'
    });
});