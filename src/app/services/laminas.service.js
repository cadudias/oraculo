
var moduleName ='laminas.services';

const HTTP = new WeakMap();

class LaminasService
{
  constructor($http, $state)
  {
    'ngInject';

    HTTP.set(this, $http);
    this.$state = $state;
  }

    //this.$http = $http;
/*
    var lm = {
        lamina_keyword: 'sdfdsf',
        laminas: []
    }
    lm.laminas = function(){
        $http({
            url: "./src/js/json/laminas.json",
            method: "GET"
        }).then(function successCallback(response) {
            console.log(response.data[0])
            return response.data[0];
        });
    }

    */
    
    getLaminas(){
        var result = HTTP.get(this).get("./src/js/json/laminas.json").then(result => result.data );
        return result;
    }

    getLamina(slug){
        var result = HTTP.get(this).get(`./src/js/json/${slug}.json`).then(result => result.data );
        return result;
    }

    localSearch(str, laminas){        
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
    }

    selectedLamina($item){   
        $scope.selectedLamina = $item.originalObject.slug;
        this.$state.go('lamina', {
            slug: $item.originalObject.slug
        });
    };

  }

angular.module(moduleName, [])
  .service('laminasService', LaminasService);

export default moduleName;
/*
var app = angular.module('app');

app.factory('laminasFactory', function(){
    console.log('ssss')
    let lm = {
        lamina_keyword: ''
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