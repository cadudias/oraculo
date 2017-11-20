
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
        this.$state.go('lamina', {
            slug: $item.originalObject.slug
        });
    };

  }

angular.module(moduleName, [])
  .service('laminasService', LaminasService);

export default moduleName;