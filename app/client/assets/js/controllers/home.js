(function(){
    angular.module('application')
        .controller('HomeController',[ '$scope', '$http', '$state', '$timeout', "$location"  /* , "ngQuillConfig" */,  function($scope, $http, $state, $timeout, $location /* , ngQuillConfig */ ){
            
          
     $scope.viewPost = function(req, res){
       
       var request = {
         id: 111111
       }
       
       	//$location.path('/post/1');
       
        $location.path('/post').search({id: request.id});
       
     }
     
     
     /*
     
     This is for the WYSIWYG
     
    var options = {
    debug: 'info',
  
    placeholder: 'Compose an epic...',
    readOnly: true,
    theme: 'snow'
  };
  var editor = new Quill('#editor', options);


     
    $scope.message = 'Test';
    $scope.showToolbar = true;


    $scope.translations = angular.extend({}, ngQuillConfig.translations, {
        10: 'smallest'
    });
    $scope.toggle = function() {
        $scope.showToolbar = !$scope.showToolbar;
    };
    // Own callback after Editor-Creation
    $scope.editorCallback = function (editor, name) {
        console.log('createCallback', editor, name);
    };
    $scope.readOnly = false;
    $scope.isReadonly = function () {
        return $scope.readOnly;
    };
    $scope.clear = function () {
        return $scope.message = '';
    };
    // Event after an editor is created --> gets the editor instance on optional the editor name if set
    $scope.$on('editorCreated', function (event, editor, name) {
        console.log('createEvent', editor, name);
    });
                  
    
    */

  }])
    
    
    
   



}())