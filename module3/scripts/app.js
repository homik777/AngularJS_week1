(function(){
'use strict';

Array.prototype.isEmpty = function(){
	return (this.length === 0 );
}
String.prototype.isEmpty = function(){
	return (this.length === 0 || !this.trim());
}

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems',foundItems);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var menu = this;

  menu.searchCriteria = "";
  menu.found = [];

  menu.narrowItDown = function(searchCriteria){

    MenuSearchService.getMatchedMenuItems(searchCriteria)
    .then(function(success){
			// console.log(success);
      menu.found = success;
    })
    .catch(function(error){
			menu.found=[];
    });
  };

	menu.removeItem = function(index){
		menu.found.splice(index,1);
	}

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
	var service = this;

  service.getMatchedMenuItems = function (searchTerm){
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
    })
    .then(function(result){
			// console.log(result.data.menu_items);/
      var foundItems = processData(result.data.menu_items,searchTerm);
			// console.log(foundItems);
			if(foundItems.isEmpty()){
				throw "";
			}
			return foundItems;
    });


  };
  var processData= function(items, searchTerm){
		if (searchTerm.isEmpty()){
			throw "";
		}
		var processed =  [];
    for(var i = 0,len = items.length;i < len;i++){
      if(items[i].description.indexOf(searchTerm) !== -1){
        processed.push(items[i]);
      }
    }

    return processed;
  }
}
function foundItems(){
	var ddo = {
		templateUrl: 'loader/itemsloaderindicator.template.html',
		scope: {
			items: '<',
			onRemove: '&'
		}
	};
	return ddo;
}

})();
