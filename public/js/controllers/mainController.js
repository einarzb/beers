app.controller('mainController', function($scope, beerFactory) {

//initialize user input fields
  // $scope.name;
  // $scope.style;
  // $scope.abv;
  // $scope.image = "https://s-media-cache-ak0.pinimg.com/736x/49/1a/f0/491af06b6e11eb0ce4cde23626deb480.jpg";
  // $scope.rate;

  $scope.editable = false; //hides input fields 

  //current beer that we're editing
  var beerCopy = this.copy;

//server beer array
  $scope.beers = beerFactory.beers;

//adding beers to array
  // $scope.addBeer = beerFactory.addBeer(newBeer);

  $scope.addBeer = function(newBeer) {
    console.log(newBeer);
    beerFactory.addToList(newBeer); //invoke service function and pass the object
    // if($scope.name && $scope.style && $scope.abv > 0){

        // var newBeer = {name: $scope.name, style:$scope.style, abv:$scope.abv, image: $scope.image, rate: $scope.rate}; //creats an object
       

        // $scope.name = "";
        // $scope.style = "";
        // $scope.abv = "";
        // $scope.image = "";
        // $scope.rate  = "";

    // } else {
    //     alert("please fill in the required fields")};  
  };

//invoke service function to remove beers from array client and DB wise
$scope.removeFromList = beerFactory.removeFromList;

//invoke service function to edit beers
$scope.editItem = function(beerCopy){
  this.editable = true;
  console.log("im inside editItem function. yeahy!");
}

//invoke service function to send the new edited object onto array
$scope.editedBeer = beerFactory.editedBeer;

    beerFactory.getBeers();

});
