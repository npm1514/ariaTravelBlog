angular.module("travelBlog", ["ui.router"])
.config(function($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./templates/home.html"
    }).state("blogs", {
      url: "/blogs",
      templateUrl: "./templates/blogs.html"
    }).state("about", {
      url: "/about",
      templateUrl: "./templates/about.html"
    }).state("map", {
      url: "/map",
      templateUrl: "./templates/map.html",
      controller: 'mapCtrl'
    }).state("admin", {
      url: "/admin",
      templateUrl: "./templates/admin.html"
    });
  $urlRouterProvider
    .otherwise("/");
})
.directive('locationSearch', function() {
  return {
    template: '<input class="typeInput" id="after-search-input" type="text" placeholder="Blog Location" value="">',
    restrict: 'E',
    scope: {
      location: '='
    },
    controller: 'locationCtrl'
  };
});
