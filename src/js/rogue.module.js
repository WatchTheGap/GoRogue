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
      })
      .state({
        name: 'about',
        url: '/about-us',
        templateUrl: 'views/about.template.html'
      })
      .state({
        name: 'contact',
        url: '/contact-us',
        templateUrl: 'views/contact.template.html'
      })
      .state({
        name: 'not-found',
        url: '/not-found',
        templateUrl: 'views/404.template.html'
      });
  }

}());
