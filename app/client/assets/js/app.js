(function() {
  'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',
    'ngQuill',
    

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider', "ngQuillConfigProvider"];

  function config($urlProvider, $locationProvider, $stateProvider, ngQuillConfigProvider) {
    
    $urlProvider.otherwise('/');
    
    $stateProvider
    
    .state('home', {
      url: "/",
      templateUrl: "../templates/home.html",
      controller: "HomeController"
      
    })
    
    .state('post',{
      url: '/post?id',
      templateUrl: "../templates/post.html",
      //controller : "PostController"
    });
    
    
    

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
    
    
    ngQuillConfigProvider.set([{
                    alias: '10',
                    size: '10px'
                }, {
                    alias: '12',
                    size: '12px'
                }, {
                    alias: '14',
                    size: '14px'
                }, {
                    alias: '16',
                    size: '16px'
                }, {
                    alias: '18',
                    size: '18px'
                }, {
                    alias: '20',
                    size: '20px'
                }, {
                    alias: '22',
                    size: '22px'
                }, {
                    alias: '24',
                    size: '24px'
                }], [{
                    label: 'Arial',
                    alias: 'Arial'
                }, {
                    label: 'Sans Serif',
                    alias: 'sans-serif'
                }, {
                    label: 'Serif',
                    alias: 'serif'
                }, {
                    label: 'Monospace',
                    alias: 'monospace'
                }, {
                    label: 'Trebuchet MS',
                    alias: '"Trebuchet MS"'
                }, {
                    label: 'Verdana',
                    alias: 'Verdana'
                }])
    
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
