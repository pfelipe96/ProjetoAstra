angular.module('starter.controllers', [])

.controller('LoginController', function($scope, $state) {

  $scope.login = function () {
      $state.go('investidores');
      console.log("Funcao funcionando")
  };
})

.controller('InvestidoresController', function($scope, $state) {
  $scope.cadastrarInvestidor = function () {
      $state.go('cadastro-investidor');
      console.log("Funcao funcionando")
  };

  $scope.investidor = function () {
      $state.go('detalhe-investidor');
      console.log("Funcao funcionando")
  };
})

.controller('CadastroInvestidorController', function($scope, $state) {

  scope.buttonBack  = function () {
      $state.go('investidores');
      console.log("Funcao funcionando")
  };

})


.controller('DetalheInvestidorController', function($scope, $state) {
  $scope.buttonBack  = function () {
      $state.go('investidores');
      console.log("Funcao funcionando")
  };

  $scope.buttonSearchValor  = function () {
      $state.go('detalhe-ValorAtual');
      console.log("Funcao funcionando")
  };
})

.controller('DetalheValorAtualController', function($scope, $state) {
  $scope.buttonBack  = function () {
      $state.go('investidores');
      console.log("Funcao funcionando")
  };
});
