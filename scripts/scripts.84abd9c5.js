"use strict";angular.module("portfolioApp",["ui.router"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/"),a.state("projects",{url:"/",templateUrl:"views/projects.html",controller:"ProjectsCtrl as projects",name:"projects"}).state("about",{url:"/about",templateUrl:"views/about.html",controller:"AboutCtrl as about",name:"about"}).state("contact",{url:"/contact",templateUrl:"views/contact.html",controller:"ContactCtrl as contact",name:"contact"}),c.html5Mode(!0)}]).run(["$rootScope","$state","$stateParams",function(a,b,c){a.$state=b,a.$stateParams=c}]),angular.module("portfolioApp").controller("ProjectsCtrl",["$scope","$http",function(a,b){b.get("data/projects.json",{cache:!0}).then(function(b){a.projects=b.data})}]),angular.module("portfolioApp").controller("AboutCtrl",["$scope","$http",function(a,b){b.get("data/about.json",{cache:!0}).then(function(b){a.item=b.data})}]),angular.module("portfolioApp").controller("ContactCtrl",["$scope","$http",function(a,b){b.get("data/contact.json",{cache:!0}).then(function(b){a.item=b.data})}]),angular.module("portfolioApp").run(["$templateCache",function(a){a.put("views/about.html",'<article class="panel panel-default"> <div class="panel-heading"> <h3 class="list-group-item-heading"> <img style="width:40px" class="img-circle img-thumbnail" ng-src="{{::item.image}}" alt="{{::item.name}}"> <span>{{::item.name}}</span> </h3> </div> <div class="panel-body list-group"> <p class="list-group-item-text"> {{::item.description}} </p> <p class="list-group-item-text"> {{::item.responsibilities.join(". ")}} </p> <p class="list-group-item-text"> <h4>tech stack</h4>{{::item.technologies.join(", ")}} </p> </div> <div ng-show="item.stackembed"> <a frameborder="0" data-theme="light" data-stack-embed="true" data-layers="1,2,3,4" href="{{::item.stackembed}}"></a> <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script> </div> </article>'),a.put("views/contact.html",'<article class="panel text-center"> <a class="fa fa-envelope-square" href="mailto:{{::item.email}}">e-mail</a> <a class="fa fa-linkedin-square" href="{{::item.linkedin}}">linkedin</a> <a class="fa fa-github-square" href="{{::item.github}}">github</a> </article>'),a.put("views/projects.html",'<article id="{{::item.id}}" ng-repeat="item in projects" class="panel panel-default"> <div class="panel-heading"> <h2 class="list-group-item-heading"> <img style="max-height:40px" ng-src="{{::item.logo}}" alt="{{::item.name}}"> <a target="_blank" href="{{::item.url}}"> {{::item.name}}</a> </h2> </div> <div class="panel-body list-group"> <img class="img-responsive" ng-src="{{::item.image}}" alt="{{::item.name}}"> <p class="list-group-item-text"> <h4>project info</h4>{{::item.description}} </p> <p class="list-group-item-text"> <h4>responsibilities</h4>{{::item.responsibilities.join(", ")}} </p> <p class="list-group-item-text"> <h4>technologies</h4>{{::item.technologies.join(", ")}} </p> </div> <div ng-show="{item.stackembed}"> <a frameborder="0" data-theme="light" data-stack-embed="true" data-layers="1,3" href="{{::item.stackembed}}"></a> <script async src="https://cdn1.stackshare.io/javascripts/client-code.js" charset="utf-8"></script> </div> <div class="panel-footer"> <img style="max-height:40px" ng-src="{{::item.company_logo}}" alt="{{::item.company}}"> <a target="_blank" href="{{::item.company_url}}"> {{::item.company}}</a> </div> </article>')}]);