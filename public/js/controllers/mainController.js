app.controller('mainController', function($scope, beerFactory) {

//users input
  $scope.name;
  $scope.style;
  $scope.abv;
  $scope.image = "https://s-media-cache-ak0.pinimg.com/736x/49/1a/f0/491af06b6e11eb0ce4cde23626deb480.jpg";
  $scope.rate;

//beer array
  $scope.beers = beerFactory.beers;

//adding beers to array
  $scope.addBeer = function(newBeer) {

    if($scope.name && $scope.style && $scope.abv > 0){

        var newBeer = {name: $scope.name, style:$scope.style, abv:$scope.abv, image: $scope.image, rate: $scope.rate}; //creats an object
        beerFactory.addToList(newBeer); //invoke service function and pass the object

        $scope.name = "";
        $scope.style = "";
        $scope.abv = "";
        $scope.image = "";
        $scope.rate  = "";

    } else {
        alert("please fill in the required fields")};  
  };

//removing beers from array
  $scope.removeFromList = function(index){
      beerFactory.removeFromList(index);
  };  

//invoking 
    beerFactory.getBeers();

});
