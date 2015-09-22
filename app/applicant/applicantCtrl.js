var app = angular.module('wciApp');

app.controller('applicantCtrl', function($scope, applicantServ){

  $scope.user = {};

  $scope.submitForm = function(isValid) {
    // validate required fields
    if (isValid) {
      applicantServ.addUser($scope.user);
      console.log($scope.user);
      alert("Your application has been submitted. Thank you for your interest in working with Workforce Connections, Inc.");
      $scope.user = '';
    }
    else {
      alert("Please review your application and complete all required fields.")
    }
  };

});
