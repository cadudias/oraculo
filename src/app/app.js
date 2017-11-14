import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import '../styles/app.scss';
import 'angucomplete-alt';

import homeRoutes from './home/home.routes';
import laminaRoutes from './lamina/lamina.routes';

import laminasService from './services/laminas.service';

angular.module("app", [
    'ui.router', 
    'angucomplete-alt',
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
}])
/*
app.factory('LaminasFactory', function(){
    console.log('ssss')
    let lm = {
        lamina_keyword: 'teste'
    }

    lm.laminas = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "/js/json/laminas.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

    lm.selectedLamina = function($item){        
        $item.title // or description, or image - from your angucomplete attribute configuration
        $item.originalObject // the actual object which was selected
        this.$parent // the control which caused the change, contains useful things like $index for use in ng-repeat.
        console.log($item.title)
    };

    lm.localSearch = function(str, laminas) {
        var matches = [];
        laminas.forEach(function(lamina) {
            var fullName = lamina.number + ' ' + lamina.name;
            if ((lamina.number.toLowerCase().indexOf(str.toString().toLowerCase()) >= 0) ||
            (lamina.name.toLowerCase().indexOf(str.toString().toLowerCase()) >= 0) ||
            (fullName.toLowerCase().indexOf(str.toString().toLowerCase()) >= 0)) {
                matches.push(lamina);
            }
        });
        return matches;
    };

    return lm;
});
*/

