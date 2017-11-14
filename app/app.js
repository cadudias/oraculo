import 'jquery'
import '../styles/app.scss';
import 'angucomplete-alt';

angular.module("App", ['main', "angucomplete-alt"]);

angular.module("main",[]);

 angular.module("main").controller("mainController",function($scope){
    // Controller body
    const A = 1;
    console.log(A);

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

}).directive('listLaminasDirective',function(){
    return {
      restrict : 'EA',
      transclude : false,
      templateUrl : 'views/components/listLaminas.html',
      scope: {
         listLaminas: "@"
      },
      link : function(scope, element, attrs) {
      }
    }
});