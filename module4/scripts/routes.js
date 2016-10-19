(function(){
'use strict';

angular.module('DataModule')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: 'views/home.view.html'
		})
		.state('categories',{
			url:'/categories',
			templateUrl: 'views/categories.view.html'
		})
}

})();
