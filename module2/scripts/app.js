(function(){
'use strict';

Array.prototype.isEmpty = function(){
	return (this.length === 0 );
}
var toBuyList = [{name: "potatoes",	quantity: "5"},{name: "tomatoes",quantity: "3"},{	name: "eggs",	quantity: "10"},
{	name: "milk boxes",	quantity: "2"},{name: "cow",	quantity: "1"}];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyListController',ToBuyListController)
.controller('AlreadyBoughtListController',AlreadyBoughtListController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyListController.$inject = [];
function ToBuyListController(){
	var checkOff = this;

	checkOff.items = toBuyList;
}

AlreadyBoughtListController.$inject = [];
function AlreadyBoughtListController(){
var showBought = this;

	showBought.items = [];
}

ShoppingListCheckOffService.$inject[];
function ShoppingListCheckOffService(){
	var service = this;
}


})();
