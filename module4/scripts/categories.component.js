(function(){
'use strict';

angular.module('DataModule')
.component("categoriesList",{
	templateUrl:'categories.view.html',
	controller: CategoriesComponentController,
	binding:{
		categories: '<'
	}
});

CategoriesComponentController.$inject = []
function CategoriesComponentController(){
	var $ctrl = this;

}
})();
