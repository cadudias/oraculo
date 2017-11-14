
/*
var app = angular.module("app");

app.controller("homeController", ['laminasFactory', function(laminasFactory){
    //let lm = $scope.lm = 
    const vm = this;
    console.log(laminasFactory.lamina_keyword)
    
    //load laminas to autocomplete
    $scope.laminas = (function() {
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

    $scope.selectedLamina = function($item){        
        $item.title // or description, or image - from your angucomplete attribute configuration
        $item.originalObject // the actual object which was selected
        this.$parent // the control which caused the change, contains useful things like $index for use in ng-repeat.
        console.log($item.title)
    };

    // search function to match full text
    $scope.localSearch = function(str, laminas) {
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
    

    return vm;
}]);
*/