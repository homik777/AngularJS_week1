(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'SignUpService'];
function SignUpController(MenuService, SignUpService) {
  var $ctrl = this;

  const SUCCESS_SAVED="Your information has been saved."
  const ITEM_NOT_FOUND="No such menu number exists."

  $ctrl.menuItem = null;
  $ctrl.resultMessage = "";
  $ctrl.user = {
    favorite: ""
  }

  $ctrl.getMenuItem = function(itemName){
     MenuService.getMenuItem(itemName)
    .then(function(success) {
      $ctrl.menuItem = success;
      $ctrl.ShowMessage(SUCCESS_SAVED);
    })
    .catch(function (error) {
      $ctrl.menuItem = null;
      $ctrl.ShowMessage(ITEM_NOT_FOUND);
    })
  }

  $ctrl.signUpUser=function(){
      $ctrl.ShowMessage("");
      if(!$ctrl.isFavoriteEmpty()){
          $ctrl.getMenuItem($ctrl.user.favorite);
          SignUpService.signUpUser($ctrl.user);
      }
      else{
        SignUpService.signUpUser($ctrl.user);
        $ctrl.ShowMessage(SUCCESS_SAVED);
      }
  }

  $ctrl.ShowMessage = function(message) {
    $ctrl.resultMessage = message;
  }

  $ctrl.isFavoriteEmpty = function() {
    return $ctrl.user.favorite === "";
  }

}
})();
