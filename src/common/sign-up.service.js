(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);


SignUpService.$inject = [];
function SignUpService() {
  var service = this;

  service.registeredUser = null;

  service.signUpUser = function(userData) {
    service.registeredUser = userData;
    return true;
  }
}



})();
