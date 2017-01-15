(function(){
'use strict';

angular.module('DataModule')
.controller("CategoriesComponentController",CategoriesComponentController);

CategoriesComponentController.$inject = [];
function CategoriesComponentController(){
	var $ctrl = this;

	$ctrl.items = categories;
};
})();
