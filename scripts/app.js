

(function(){
'use strict';

String.prototype.isEmpty = function(){
	return (this.length === 0 || !this.trim());
}

angular.module('LunchCheck', [])
.controller('LunchController',LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope){
		const TOO_MUCH = "Too much!";
		const NOT_TO_MUCH = "Enjoy!";
		const ENTER_DATA = "Please enter data first.";
		const SPLITTER = ',';
		const BLACK = "text-default";
		const RED = "text-danger";
		const GREEN = "text-success";
		const HAS_SUCCESS = "has-success";
		const HAS_ERROR = "has-error";

		$scope.items = "";
		$scope.textColor = BLACK;
		$scope.borderClr = "";

		$scope.checkifTooMuch = function (){
			var noOfItems = countItems($scope.items);

			if(noOfItems === 0){
				$scope.message = ENTER_DATA;
				setMessageColors(RED, HAS_ERROR);
			}else if(noOfItems > 3){
				$scope.message = TOO_MUCH;
				setMessageColors(GREEN, HAS_SUCCESS);
			}else {
				$scope.message = NOT_TO_MUCH;
				setMessageColors(GREEN, HAS_SUCCESS);
			}
		};

		var setMessageColors = function(textColor, borderColor){
			$scope.textColor = textColor;
			$scope.borderClr = borderColor;

		}
		var countItems = function(items){
			var currentNoOfItems = 0;
			items.split(SPLITTER).forEach(function(item){
				if(!item.isEmpty()){
					currentNoOfItems++;
				}
			})

			return currentNoOfItems;
		};
}



})();
