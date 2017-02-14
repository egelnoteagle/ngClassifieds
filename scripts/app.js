angular.module("ngClassifieds", ["ngMaterial"]);
angular.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('orange');
  })
  .directive("helloWorld", function() {
    return {
      template: "<h1>Hello, world!</h1>"
    }
  });
