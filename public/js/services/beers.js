app.factory('beerService', function($http, $rootScope){
         
     
  var beerFactory = {beersList: []}; //turned my array onto an object that holds an empty array
  
  //fetching all beers from server API
  beerFactory.getBeers = function(){
    return $http.get('/beers') //returns promise
    //success
      .then(function(response){ 
        // console.log(response.data)
          //copies the data that was received into our beers array
          angular.copy(response.data, beerFactory.beersList); 
          // beerFactory.beersList.push({});
      }, 
      //error
      function(err){ 
        console.error(err)
      });
  }; //end getBeers

  beerFactory.addToList = function(newBeer){
     console.log('from the service')
     console.log(newBeer);
     hardList.push(newBeer);
     console.log(hardList);
  };

  beerFactory.removeFromList = function (index) {
    hardList.splice(index, 1); 
    console.log(index); 
  };
  
  return beerFactory;


});