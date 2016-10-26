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
      $http.get('data/projects.json', { cache: true})
         .then(function (result) {
             $scope.projects = result.data;
         });
  });