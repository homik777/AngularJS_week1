(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['menuItem','userInfo'];
function UserInfoController(menuItem, userInfo) {
  var $ctrl = this;

  $ctrl.userInfo = userInfo;
  $ctrl.menuItem = menuItem;
  console.log(userInfo);
  console.log(menuItem);
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
