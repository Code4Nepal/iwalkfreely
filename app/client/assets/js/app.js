'use strict';

  angular.module('application', [
    'ui.router',
    'ngAnimate',



    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations',

  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];

  function config($urlProvider, $locationProvider, $stateProvider) {

    $urlProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: "/",
      templateUrl: "./../../templates/home.html",
      controller: "HomeController"

    })

    .state('post',{
      url: '/post?id',
      templateUrl: "./../../templates/post.html"
      //controller : "PostController"
    })

		.state('story',{
			url:"/story/create",
			templateUrl: "./../../templates/post_story.html",
			controller: "PostStory"
		})

		.state('getStory',{
			url:"/stories",
				templateUrl: "./../../templates/stories.html",
			controller: "GetStory"
		})

		;


    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');


  }

  function run() {
    FastClick.attach(document.body);
  }

