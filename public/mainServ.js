angular.module("travelBlog")
.service("mainServ", function($http) {
  this.getBlogs = function(){
    return $http({
      method: "GET",
      url: '/blog'
    }).then(function(res){
      return res.data;
    });
  };

  this.postBlog = function(blog){
    return $http({
      method: "POST",
      url: '/blog',
      data: blog
    }).then(function(res){
      return res.data;
    });
  };

  this.putBlog = function(blog){
    return $http({
      method: "PUT",
      url: '/blog/' + blog._id,
      data: blog
    }).then(function(res){
      return res.data;
    });
  };

  this.deleteBlog = function(blog){
    return $http({
      method: "DELETE",
      url: '/blog/' + blog._id
    }).then(function(res){
      return res.data;
    });
  };

  this.postLogin = function(userinfo){
    return $http({
      method: "POST",
      url: '/login',
      data: userinfo
    }).then(function(res){
      return $http({
        method: "GET",
        url: '/current'
      }).then(function(res){
        return res.data;
      });
    });
  }

});
