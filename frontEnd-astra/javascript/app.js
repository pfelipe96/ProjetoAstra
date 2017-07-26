var app = angular.module('iniciarAPP', ['starter.controllers', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'login.html',
      controller: 'LoginController'
    })

    .state('investidores', {
      url: '/investidores',
      templateUrl: 'investidores.html',
      controller: 'InvestidoresController'
    });
    //
    // .state('app', {
    //   url: '/app',
    //   abstract: true,
    //   templateUrl: 'templates/menu.html',
    //   controller: 'AppController'
    // })
    //
    //   .state('app.perfil', {
    //     url: '/perfil',
    //     views: {
    //       'menuContent': {
    //         templateUrl: 'templates/perfil.html',
    //         controller: 'PerfilController'
    //       }
    //     }
    //   });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
