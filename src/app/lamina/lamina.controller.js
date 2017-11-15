export default class LaminaController {
  constructor($scope, $timeout, laminasService) {
    this.message = 'Hello'
    console.log('Lamina controller')

    $scope.show_me = false;

    $scope.showText = function(){      
      console.log('aaaaaaa')
      $scope.show_me = !$scope.show_me;
    }

  }
}