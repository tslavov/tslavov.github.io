'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', ["ui.router"])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) { 
      $urlRouterProvider.otherwise('/projects');

      $stateProvider.state('projects', {
          url: '/projects',
          templateUrl: 'views/projects.html',
          controller: 'ProjectsCtrl as projects',
          name: 'projects'
      }).state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl as about',
          name: 'about'
      }).state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl as contact',
          name: 'contact'
      });
  }]);
