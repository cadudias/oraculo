import 'jquery'
import '../styles/app.scss';

var app = angular.module("app",['ui.router']);

app.config(['$locationProvider', '$urlRouterProvider', '$stateProvider', function($locationProvider, $urlRouterProvider, $stateProvider){

    // removes # from url
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true 
    });

    //$urlRouterProvider.otherwise('/');
    
    $stateProvider.state('/', {
        url: '/',
        template: 'Olá, home',
        controller: 'homeController',
        controllerAs: 'homeCtrl'
    })
}]);

app.controller("homeController", function(){
    const vm = this;
})