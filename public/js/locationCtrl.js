angular.module('travelBlog').controller('locationCtrl', function($scope, $element) {



  var bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-90, -180),
    new google.maps.LatLng(90, 180)
  );

  var input = $element[0].children[0];

  var options = {
    bounds: bounds,
    types: ['geocode']
  };

  var autocomplete = new google.maps.places.Autocomplete(input, options);

  var getPlaceDetails = function() {
    $scope.location = {
      address_string: "",
      country: "",
      city: "",
      state: "",
      lat: "",
      lng: ""
    };
    var data = autocomplete.getPlace();
    var city = data.address_components[0];
    if (data.address_components.length === 3) {
      var state = data.address_components[1];
      var country = data.address_components[2];
    } else {
      var state = data.address_components[2];
      var country = data.address_components[3];
    }
    if(data.formatted_address){
      $scope.location.address_string = data.formatted_address;
    }
    if(city.long_name){
      $scope.location.city = city.long_name;
    }
    if(state.long_name){
      $scope.location.state = state.long_name;
    }
    if(country.long_name){
      $scope.location.country = country.long_name;
    }
    if(data.geometry.location.lat()){
      $scope.location.lat = data.geometry.location.lat();
    }
    if(data.geometry.location.lng()){
      $scope.location.lng = data.geometry.location.lng();
    }

    $scope.$apply();
  };
  autocomplete.addListener('place_changed', getPlaceDetails);

});
