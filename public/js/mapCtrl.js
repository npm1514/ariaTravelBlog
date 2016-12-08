angular.module("travelBlog")
.controller("mapCtrl", function($scope, mainServ) {
  var markers = [];
  $scope.countryCount = 0;
  $scope.countryList = [];
  $scope.stateCount = 0;
  $scope.stateList = [];
  $scope.cityCount = 0;
  $scope.cityList = [];


  var center = {lat: 0, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: center
  });

  $scope.getPlaces = function(){
    mainServ.getBlogs()
    .then(function(res){
      for (var i = 0; i < res.length; i++) {
        if(res[i].location.country){
          var newCountry = true;
          for (var k = 0; k < $scope.countryList.length; k++) {
            if(res[i].location.country == $scope.countryList[k]){
              newCountry = false;
            }
          }
          if (newCountry) {
            $scope.countryList.push(res[i].location.country)
            $scope.countryCount++;
          }
        }

        if(res[i].location.state){
          var newState = true;
          for (var l = 0; l < $scope.stateList.length; l++) {
            if(res[i].location.state == $scope.stateList[l]){
              newState = false;
            }
          }
          if (newState) {
            $scope.stateList.push(res[i].location.state)
            $scope.stateCount++;
          }
        }

        if(res[i].location.city){
          var newCity = true;
          for (var m = 0; m < $scope.cityList.length; m++) {
            if(res[i].location.city == $scope.cityList[m]){
              newCity = false;
            }
          }
          if (newCity) {
            $scope.cityList.push(res[i].location.city)
            $scope.cityCount++;
          }
        }
        if(res[i].location.lat && res[i].location.lng){
          new google.maps.Marker({
            position: {
              lat: res[i].location.lat,
              lng: res[i].location.lng
            },
            map: map,
            title: res[i].location.address_string
          });
        }
      }
      var countList = [$scope.countryCount, $scope.stateCount, $scope.cityCount];
      var max = 0;

      for (var j = 0; j < countList.length; j++) {
        if(countList[j] > max){
          max = countList[j];
        }
      }
      $scope.countryWidth = $scope.countryCount/max;
      $scope.stateWidth = $scope.stateCount/max;
      $scope.cityWidth = $scope.cityCount/max;

    });
  };
  $scope.getPlaces();

});
