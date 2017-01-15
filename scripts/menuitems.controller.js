(function(){
'use strict';

angular.module('DataModule')
.controller("MenuItemsController", MenuItemsController);

MenuItemsController.$inject= ['items'];
function MenuItemsController(items){
	var itemList = this;

	itemList.category = items.data.category;
	itemList.items = items.data.menu_items;
};
})();
