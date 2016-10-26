'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('AboutCtrl', function ($scope, $http) {
      $http.get('data/about.json', { cache: true})
         .then(function (result) {
             $scope.item = result.data;
         });
  });