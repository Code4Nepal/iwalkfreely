(function(){
	angular.module('application')
		.controller('PostStory',['$scope', '$http', '$state', '$timeout', function($scope, $http, $state, $timeout){

			    var quill = new Quill('#editor', {
			    theme: 'snow'
			  });



			$scope.postStory = function(req, res){

				var request = {
					title			: $scope.title,
					name			: $scope.name,
					story			: $scope.story
				}


				$http.post('api/story/post', request).success(function(response){
					console.log('success');
				})



			}


		}])





}());