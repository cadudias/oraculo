import LaminaController from '../lamina/lamina.controller.js';

function laminaRouting($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('lamina', {
      url: '/lamina/:slug',
      template: require('../lamina/lamina.template.html'),
      controller: LaminaController,
      controllerAs: 'lamina'
    });
}

export default angular
  .module('lamina.routing', [])
  .config(laminaRouting);