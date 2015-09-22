var app = angular.module('wciApp');

app.service('applicantServ', function($firebaseArray){

 this.addUser = function(user) {
   console.log(user);
   var arr = $firebaseArray(new Firebase('https://wci-app.firebaseio.com/applicants'))
   arr.$add(user);
 };


});
