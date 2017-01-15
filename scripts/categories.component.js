(function(){
'use strict';

angular.module('DataModule')
.component("categoriesList",{
	templateUrl:'views/categories.component.html',
	bindings:{
		categories: '<'
	}
});

})();
