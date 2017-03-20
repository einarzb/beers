app.controller('mainController', function($scope, beerFactory) {
//initializing  
  $scope.editable = false; //hides input fields 
  //current beer that we're editing
  var beerCopy = this.copy;

//server beer array
  $scope.beers = beerFactory.beers;

//adding beers to array
  $scope.addBeer = function(newBeer) {
    console.log(newBeer);
    beerFactory.addToList(newBeer); //invoke service function and pass the object
  };

//invoke service function to remove beers from array client and DB wise
  $scope.removeFromList = beerFactory.removeFromList;

//invoke service function to edit beers
  $scope.editItem = function(beerCopy){
    this.editable = true; //reveals input fields
  };

//invoke service function to send the new edited object onto array
  $scope.saveBeer = beerFactory.saveBeer;

    beerFactory.getBeers();

});
