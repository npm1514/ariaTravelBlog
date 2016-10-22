angular.module("travelBlog")
.controller("mainCtrl", function($scope, mainServ) {
  $scope.getBlogs = function(){
    mainServ.getBlogs()
    .then(function(res){
      $scope.blogList = res;
    });
  };
  $scope.getBlogs();

  $scope.putBlog = function(blog, newcomment){
    newcomment.date = new Date();
    blog.comments.push(newcomment);
    mainServ.putBlog(blog)
    .then(function(res){
      $scope.getBlogs()
    });
  };

});
