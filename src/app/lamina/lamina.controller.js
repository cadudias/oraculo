export default class LaminaController {
  constructor($scope, laminasService, $stateParams) {

    const slug = $stateParams.slug;

    $scope.lamina = laminasService.getLamina(slug).then(lamina => {
      $scope.lamina = lamina[0]
    })

    $scope.showText = function(elementNumber){
      $scope.cClass = elementNumber;
    }
  }
}