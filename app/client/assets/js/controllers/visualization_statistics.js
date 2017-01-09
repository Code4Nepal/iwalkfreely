(function(){
    angular.module('application')
        .controller('Statistics',[ '$scope', '$http', '$state', '$timeout', "$location",  function($scope, $http, $state, $timeout, $location){

        	donutChart();

					donutChart2();




  }])







}())