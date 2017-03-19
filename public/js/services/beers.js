app.factory('beerService', function($http, $rootScope){
        
  var beerFactory = {beersList: []}; 
  
  //fetching all beers from server API

  beerFactory.getBeers = function(){
    return $http.get('/beers')//returns promise
    //if success
    .then(function(response){ 
    console.log(beerFactory.beersList);  
    //copies the data that was received into our beers array
    angular.copy(response.data, beerFactory.beersList); 
    }, 
   //if error
    function(err){ 
        console.error(err)
      });
  }; 

  beerFactory.addToList = function(newBeer){
    return $http.post('/beers').then(function(response){
         console.log("Im response of addToList");

         //client
         console.log('from the service')
         beerFactory.beersList.push(newBeer);
        },

        function(err){
          console.error(err);
        });    
  };

  beerFactory.removeFromList = function (index) {
    //client
    beerFactory.beersList.splice(index, 1); //removes from view
  };
  
  return beerFactory;

});