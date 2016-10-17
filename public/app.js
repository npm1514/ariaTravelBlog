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
    });
  $urlRouterProvider
    .otherwise("/");
});
