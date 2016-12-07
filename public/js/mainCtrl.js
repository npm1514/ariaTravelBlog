angular.module("travelBlog")
.controller("mainCtrl", function($scope, mainServ, $state, $rootScope) {
  $scope.newBlog = {
    links:[{}]
  };

  var dateDisplayer = function(datething){
    var month, date, year;
    if(datething.getMonth()+1 < 10){
      month = "0"+ (datething.getMonth()+1);
    } else {
      month = (datething.getMonth()+1);
    }
    if(datething.getDate()<10){
      date = "0" + datething.getDate();
    } else {
      date = datething.getDate();
    }
    year = datething.getFullYear();
    return year + "-" + month + "-" + date;
  };

  $scope.getBlogs = function(){
    mainServ.getBlogs()
    .then(function(res){
      $scope.blogList = res;
      console.log($scope.blogList);
    });
  };
  $scope.getBlogs();

  $scope.postBlog = function(blog){
    blog.dateDisplay = dateDisplayer(blog.date);
    console.log(blog);
    mainServ.postBlog(blog)
    .then(function(res){
      $scope.addingNewBlog = false;
      $scope.newBlog = {};
      $scope.getBlogs();
    });
  };

  $scope.addComment = function(blog, newcomment){
    newcomment.date = new Date();
    newcomment.dateDisplay = dateDisplayer(newcomment.date);
    blog.comments.push(newcomment);
    mainServ.putBlog(blog)
    .then(function(res){
      $scope.getBlogs()
    });
  };

  $scope.putBlog = function(blog){
    if(!blog.date){
      delete blog["date"];
    } else {
      blog.dateDisplay = dateDisplayer(blog.date);
    }
    mainServ.putBlog(blog)
    .then(function(res){
      $scope.getBlogs()
    });
  };

  $scope.deleteBlog = function(blog){
    mainServ.deleteBlog(blog)
    .then(function(res){
      $scope.getBlogs()
    });
  };

  $scope.postLogin = function(userinfo){
    mainServ.postLogin(userinfo)
    .then(function(res){
      $scope.currentUser = res;
      $scope.loginmodalopen = false;
      $scope.menuopen = false;

      if(res.admin){
        $state.go('admin');
      } else {
        $scope.loginfailuremodal = true;
      }
    });
  };

});
