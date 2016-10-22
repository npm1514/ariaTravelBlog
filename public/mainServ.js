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

  this.putBlog = function(blog){
    return $http({
      method: "PUT",
      url: '/blog/' + blog._id,
      data: blog
    }).then(function(res){
      return res.data;
    });
  };

});
