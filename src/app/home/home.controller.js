const INIT = new WeakMap();
const SERVICE = new WeakMap();
const TIMEOUT = new WeakMap();

export default class HomeController {
  constructor($scope, $timeout, laminasService) {
    //var vm = this;
    /*
    SERVICE.set(this, laminasService);
    TIMEOUT.set(this, $timeout);
    INIT.set(this, () => {
      SERVICE.get(this).getLaminas().then(laminas => {
        this.laminas = laminas;
      });
    });

    INIT.get(this)();
    */

    //console.log(laminasService.getLaminas())

    laminasService.getLaminas().then(laminas => {
        $scope.laminas = laminas;
    });
    //var vm = $scope.vm = laminasService.getLaminas();
    //this.scope = $scope;
//console.log(laminasService)
    //$scope.laminas = laminasService.laminas();
    //var vm = this;
    /*
    this.laminas = laminasService.getLaminas();

    console.log(this.laminas)
    this.message = 'Hello'
    console.log('home controller')
    */
    /*
    angular.extend(this, {
        laminas:  laminasService.getLaminas(),
        doSomething: function doSomething() {
      }
  });
    */
  }
}