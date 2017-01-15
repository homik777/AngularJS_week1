(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'SignUpService'];
function SignUpController(MenuService, SignUpService) {
  var $ctrl = this;
  $ctrl.menuItem = null;
  $ctrl.user = {
    favorite: ""
  }
  $ctrl.user.favorite = "";
  $ctrl.getMenuItem = function(itemName){
     MenuService.getMenuItem(itemName)
    .then(function(success) {
      $ctrl.menuItem = success;
    })
    .catch(function (error) {
      menuItem = null;
      //TODO: handle error
    })
  }

  $ctrl.signUpUser=function(){
      SignUpService.signUpUser($ctrl.user);
      $ctrl.ShowSuccessMessage();
  }

  $ctrl.ShowSuccessMessage = function() {
    console.log("success");
  }

}


})();
