var app = angular.module('wciApp');

app.directive("appDir", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.css("background", "#FFF0F0");
    });
    element.bind("mouseleave", function() {
      element.css("background", "none");
    });
  }
});



