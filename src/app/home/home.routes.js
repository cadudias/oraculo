import HomeController from '../home/home.controller.js';

function homeRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url: '/',
      template: require('../home/home.template.html'),
      controller: HomeController
    });
}

export default angular
  .module('home.routing', [])
  .config(homeRouting);