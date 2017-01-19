(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['MenuService','userInfo'];
function UserInfoController(MenuService, userInfo) {
  var $ctrl = this;

  $ctrl.hasFavorite = false;
  $ctrl.registered = false;
  console.log(userInfo);
// $ctrl.userInfo = userInfo;
  $ctrl.$onInit = function(){
    $ctrl.userInfo = userInfo;
    if($ctrl.userInfo === null){
      $ctrl.registered = false;
    }else{
      $ctrl.registered = true;
      if(userInfo.favorite !== ""){
        $ctrl.getFavoriteMenuItem(userInfo.favorite);
      }else{
        $ctrl.hasFavorite = false;
      }
    }
  }
  $ctrl.getFavoriteMenuItem = function(itemName) {
    MenuService.getMenuItem(itemName)
    .then(function(success) {
      $ctrl.menuItem = success;
      $ctrl.hasFavorite = true;
    })
    .catch(function (error) {
      $ctrl.hasFavorite = false;
      $ctrl.menuItem = null;
    })
  }
  // $ctrl.getMenuItem = function(itemName){
  //    MenuService.getMenuItem(itemName)
  //   .then(function(success) {
  //     $ctrl.menuItem = success;
  //   })
  //   .catch(function (error) {
  //     menuItem = null;
  //     //TODO: handle error
  //   })
  // }

  // $ctrl.signUpUser=function(){
  //     SignUpService.signUpUser($ctrl.user);
  //     $ctrl.ShowSuccessMessage();
  // }

  // $ctrl.ShowSuccessMessage = function() {
  //   console.log("success");
  // }

}


})();
