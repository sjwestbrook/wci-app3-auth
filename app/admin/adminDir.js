var app = angular.module('wciApp');

app.directive("adminDir", function() {
  return function(scope, element, attrs) {
    element.bind("mouseenter", function() {
      element.css("background", "#3F7A62");
      element.css("color", "white");
    });
    element.bind("mouseleave", function() {
      element.css("background", "none");
      element.css("color", "black");
    });
  }
});
