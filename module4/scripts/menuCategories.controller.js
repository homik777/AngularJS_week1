(function(){
'use strict';

angular.module('DataModule')
.controller("MenuCategoriesController", MenuCategoriesController);

MenuCategoriesController.$inject= ['items'];
function MenuCategoriesController(items){
	var categoriesList = this;
	
	categoriesList.categories = items.data;
};
})();
