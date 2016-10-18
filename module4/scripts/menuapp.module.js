(function(){
'use strict';

Array.prototype.isEmpty = function(){
	return (this.length === 0 );
}
String.prototype.isEmpty = function(){
	return (this.length === 0 || !this.trim());
}

angular.module('MenuApp', ['Data']);
})();
