(function(){
    angular.module('application')
        .controller('HomeController',[ '$scope', '$http', '$state', '$timeout', "$location"  /* , "ngQuillConfig" */,  function($scope, $http, $state, $timeout, $location /* , ngQuillConfig */ ){

					barGraph();

					donutChart();


     $scope.viewPost = function(req, res){

      console.log('change');

       var request = {
         id: 111111
       }

       	//$location.path('/post/1');
      // $location.path('/post').search({id: request.id});
       $location.path('/post');
     }

		 $scope.postStory = function(req, res){
			 $location.path('/story/create');
		 }

		 $scope.stories = function(req, res){
			 console.log('change link');
			 $location.path('/stories');
		 }

     $scope.home = function(req, res){
        location.path('/');
        console.log('back to home');
      }

      $scope.stats = function(req, res){
         $location.path('/statistics/info');
      }




  }])







}())