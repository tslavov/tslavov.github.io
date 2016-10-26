'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ContactCtrl',function ($scope, $http) {
      $http.get('data/contact.json', { cache: true})
         .then(function (result) {
             $scope.item = result.data;
         });
  });