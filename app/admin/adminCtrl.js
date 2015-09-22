var app = angular.module('wciApp');

app.controller('adminCtrl', function($scope, adminServ){

  adminServ.getUsers().then(function(usersArr){
    $scope.users = usersArr
    //console.log($scope.users[0])
  })

});
