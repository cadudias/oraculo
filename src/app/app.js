import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import '../styles/app.scss';
import 'angucomplete-alt';
import 'angular-sanitize';

import homeRoutes from './home/home.routes';
import laminaRoutes from './lamina/lamina.routes';

import laminasService from './services/laminas.service';

angular.module("app", [
    'ui.router', 
    'angucomplete-alt',
    'ngSanitize',
    homeRoutes.name,
    laminaRoutes.name,
    laminasService
]).config(['$locationProvider', '$urlRouterProvider', '$stateProvider', function($locationProvider, $urlRouterProvider, $stateProvider){
    // removes # from url
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true 
    });    

    $urlRouterProvider.otherwise('/');
}]);
