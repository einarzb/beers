app.factory('beerFactory', function($http, $rootScope){
//holds all data and methods that change the data should be in a factory.  

  var beerFactory = {beers: []}; 
  //The beer array and all the factory functionality returned inside an object.

  //fetching all beers from server API

  beerFactory.getBeers = function(){
    return $http.get('/beers')//returns promise
    //if success
    .then(function(response){ 
    console.log(beerFactory.beers);  
    //copies the data that was received into our beers array
    angular.copy(response.data, beerFactory.beers); 
    }, 
   //if error
    function(err){ 
        console.error(err)
      });
  }; 

  beerFactory.addToList = function(newBeer){
    return $http.post('/beers', newBeer).then(function(response){
         console.log("Im response of addToList");

         //client
         console.log('from the service')
         beerFactory.beers.push(newBeer);
        },

        function(err){
          console.error(err);
        });    
  };

  beerFactory.removeFromList = function (id) {
    return $http.delete('/beers/' + id, {params:{_id: req.params.id}}).then(function(response){
        console.log("Im response of removeFromList");

        //client - update the view. this happens in then. fancy callback func
        beerFactory.getBeers(); 
       },
         function(err){
          console.error(err);
        });  
  };
  
  return beerFactory;

});