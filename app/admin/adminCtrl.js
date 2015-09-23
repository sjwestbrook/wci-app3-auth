var app = angular.module('wciApp');

app.controller('adminCtrl', function($scope, $rootScope, $firebaseAuth, $firebaseObject, $firebaseArray, adminServ){

  adminServ.getUsers().then(function(usersArr){
    $scope.users = usersArr
    //console.log($scope.users[0])
  })

//-------------------------------------------------------------------------------

  // if logged out, hide applicant data
  // if logged in, show applicant data


  // http://codepen.io/awesome/pen/hsAnf?editors=101
  // only need to log in to admin page
  var ref = new Firebase('https://wci-app.firebaseio.com');

  $scope.authObj = $firebaseAuth(ref);
  // $rootScope.alert = {};

  $scope.signIn = function () {
    $scope.authObj.$authWithPassword({   // $rootScope.auth.$login isn't a function
      email: $scope.email,
      password: $scope.password
    }).then(function(user) {
      $scope.authData = user;
      console.log('logged in as' + user.uid)
      //$rootScope.alert.message = '';
    }, function(error) {
      if (error = 'INVALID_EMAIL') {
        console.error('Invalid Email');
      } else if (error = 'INVALID_PASSWORD') {
        console.error('Invalid Password');
      } else {
        console.error(error);
      }
    });
  }


});
