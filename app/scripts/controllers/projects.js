'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
      $http.get('projects.json')
         .then(function (res) {
             $scope.projects = res.data;
         });
  });