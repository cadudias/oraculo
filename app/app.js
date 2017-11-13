import 'jquery'
import '../styles/app.scss';

angular.module("App",['main']);

angular.module("main",[]);

 angular.module("main").controller("mainController",function($scope){
    // Controller body
    const A = 1;
    console.log(A);
});