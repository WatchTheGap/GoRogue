(function() {
  'use strict';

  angular.module('rogue', ['ui.router']).config(routerConfig);

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/not-found');

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        templateUrl: 'views/home.template.html'
      });
  }

}());
