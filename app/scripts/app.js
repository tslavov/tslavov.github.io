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
  .module('portfolioApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider.state('projects', {
          url: '/',
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

      // use the HTML5 History API
      $locationProvider.html5Mode(true);

  }]).run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
  ]
);
