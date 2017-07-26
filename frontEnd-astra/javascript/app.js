var app = angular.module('starter', ['ui.router', 'starter.controllers']);

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
    })

    .state('cadastro-investidor', {
      url: '/cadastro-investidor',
      templateUrl: 'cadastro-investidor.html',
      controller: 'CadastroInvestidorController'
    })

    .state('detalhe-ValorAtual', {
      url: '/detalhe-ValorAtual',
      templateUrl: 'detalhe-ValorAtual.html',
      controller: 'DetalheValorAtualController'
    })

    .state('detalhe-investidor', {
      url: '/detalhe-investidor',
      templateUrl: 'detalhe-investidor.html',
      controller: 'DetalheInvestidorController'
    });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
