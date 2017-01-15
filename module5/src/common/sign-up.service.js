(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = [];
function SignUpService() {
  var service = this;

  service.registeredUser = null;
  console.log(service.registeredUser);
  service.signUpUser = function(userData) {
    service.registeredUser = userData;
    console.log(service.registeredUser);
  }
}



})();
