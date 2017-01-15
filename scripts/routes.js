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
			templateUrl: 'views/categories.view.html',
			controller: 'MenuCategoriesController as categoriesList',
			resolve: {
				items: ['MenuDataService', function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
		})
		.state('items',{
			url:'/items/{itemId}',
			templateUrl: 'views/items.view.html',
			controller: 'MenuItemsController as itemList',
			resolve: {
				items: ['$stateParams','MenuDataService', function($stateParams, MenuDataService){
					return MenuDataService.getItemsForCategory($stateParams.itemId);
				}]
			}
		})
}

})();
