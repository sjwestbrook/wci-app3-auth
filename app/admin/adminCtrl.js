var app = angular.module('wciApp');

app.controller('adminCtrl', function($scope, $firebaseAuth, $firebaseObject, $firebaseArray, adminServ){

  adminServ.getUsers().then(function(usersArr){
    $scope.users = usersArr
    //console.log($scope.users[0])
  })

//-------------------------------------------------------------------------------

  // if logged out, hide applicant data
  // if logged in, show applicant data


  // http://codepen.io/awesome/pen/hsAnf?editors=101
  // only need to log in to admin page
  // leaving page after logging in successfully will log user out
  var ref = new Firebase('https://wci-app.firebaseio.com');

  $scope.authObj = $firebaseAuth(ref);

  $scope.signIn = function () {
    $scope.authObj.$authWithPassword({
      email: $scope.email,
      password: $scope.password
    }).then(function(user) {
      $scope.authData = user;
      console.log('logged in as ' + user.uid)
      // changing user.uid to user.username results in 'logged in as undefined'
    }, function(error) {
      if (error) {
        console.error('Invalid Login');
      }
    });
  }

//------------------------------------------------------------------------------

  $scope.logout = function() {
    $scope.authData = null;

    // console.log('logged in as' + user.uid);
      // data disappears; error "user is not defined" in console --> ok?

    // empty email and password inputs, so unauthorized can't sign in
    $scope.email = null;
    $scope.password = null;
  }

});
