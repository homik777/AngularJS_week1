(function(){
'use strict';

Array.prototype.isEmpty = function(){
	return (this.length === 0 );
}

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var checkOff = this;

	checkOff.items = ShoppingListCheckOffService.getItemsToBuy();
	checkOff.checkOffItem = function(itemIndex){
		ShoppingListCheckOffService.checkOffItem(itemIndex);
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var bought = this;

	bought.items = ShoppingListCheckOffService.getBoughtItems();
	console.log(ShoppingListCheckOffService.getBoughtItems());
}

function ShoppingListCheckOffService(){
	var service = this;

	var toBuyList = [{name: "potatoes",	quantity: "5"},{name: "tomatoes",quantity: "3"},{	name: "eggs",	quantity: "10"},
	{	name: "milk boxes",	quantity: "2"},{name: "cow",	quantity: "1"}];

	var itemsToBuy = toBuyList;
	var boughtItems = [];

	service.getBoughtItems = function (){
		return boughtItems;
	}

	service.getItemsToBuy = function() {
		return itemsToBuy;
	}

	service.checkOffItem = function (itemIndex){
		boughtItems.push(itemsToBuy[itemIndex]);
		itemsToBuy.splice(itemIndex, 1);
		console.log(boughtItems);
	}

}

})();
