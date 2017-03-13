app.controller('mainController', function($scope, beerService) {

//users input
  $scope.name;
  $scope.style;
  $scope.abv;
  $scope.image;
  $scope.rate;

//beer array
  $scope.beersList = beerService.beersList;

//adding beers to array
  $scope.addBeer = function(newBeer) {
    var newBeer = {name: $scope.name, style:$scope.style, abv:$scope.abv, image: $scope.image}; //creats an object
    beerService.addToList(newBeer); //invoke service function and pass the object

      $scope.name = "";
      $scope.style = "";
      $scope.abv = "";
      $scope.image = "";
      $scope.rate  = "";
  };
  
//removing beers from array
  $scope.removeFromList = function(index){
      beerService.removeFromList(index);
  };  

    beerService.getBeers()

});
