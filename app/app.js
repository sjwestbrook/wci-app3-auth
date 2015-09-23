var app = angular.module('wciApp', ['ngRoute', 'firebase']);

// app.constant('fb', {
//   url: 'https://wci-app.firebaseio.com/'
// });


app.config(function($routeProvider){

  $routeProvider

    .when('/applicant', {
      templateUrl: 'app/applicant/applicant.html',
      controller: 'applicantCtrl'
    })

    .when('/admin', {
      templateUrl: 'app/admin/admin.html',
      controller: 'adminCtrl'
    })

    .otherwise({
      redirectTo: '/'
    })
});
