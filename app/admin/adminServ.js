var app = angular.module('wciApp');

app.service('adminServ', function($firebaseArray){

  var arr = $firebaseArray(new Firebase('https://wci-app.firebaseio.com/applicants'))

  this.getUsers = function(){
    return arr.$loaded();
  }











});
