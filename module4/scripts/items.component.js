(function(){
'use strict';

angular.module('DataModule')
.component("itemList",{
	templateUrl:'views/items.component.html',
	bindings:{
		items: '<',
		category: '<'
	}
});

})();
