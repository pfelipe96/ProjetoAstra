var app = angular.module('starter.controllers', [])

.controller('LoginController', function($scope, $state) {

  $scope.login = function () {
      $state.go('investidores');

  };
})

.controller('InvestidoresController', function($scope) {
});
