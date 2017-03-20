app.factory('beerFactory', function($http, $rootScope){
//holds all data and methods that change the data should be in a factory.  

  var beerFactory = {beers: []}; 
  //when ill refactor it ll be an empty {}

  //The beer array and all the factory functionality returned inside an object.

  //fetching all beers from server API

  beerFactory.getBeers = function(){
    return $http.get('/beers')//returns promise
        //if success
        .then(function(response){ 
        //copies the data that was received onto our beers array
        angular.copy(response.data, beerFactory.beers); 
        //when ill refactor itll be: return response.data;
        }, 
        function(err){ 
            console.error(err)
          });
  }; 

  beerFactory.addToList = function(newBeer){
    console.log('here in the factory')
    console.log(newBeer);

    return $http.post('/beers', newBeer)
      .then(function(response){
      console.log("Im response of addToList");

         //client
         beerFactory.beers.push(response.data);
        },
        function(err){
          console.error(err);
        });    
  };

  beerFactory.removeFromList = function (id) {
    return $http.delete('/beers/' + id).then(function(response){
        console.log("Im response of removeFromList");

        //client - invoke getbeers that update the view
        beerFactory.getBeers(); 
       },
         function(err){
          console.error(err);
        });  
  };
  
  // beerFactory.editItem = function(id,newBeer){
  //   return $http.put('/beers/' + id, newBeer).then(function(response){
  //     console.log("Im response of editItem");

  //   //client - invoke getbeers that update the view
  //       beerFactory.getBeers(); 
  //     },
  //       function(err){
  //         console.error(err);
  //   });  
  // };

  beerFactory.saveBeer = function(id, updatedBeer){
    console.log(id);
    console.log(updatedBeer);
    console.log("Ive pressed the save button! yeahy")

    return $http.put('/beers/' + id, updatedBeer).then(function(response){
      console.log("Im response of editItem");

      //client
    
      beerFactory.getBeers(); 
      this.editable = false; //toggle back to edit once data saved and sent to server

      },
        function(err){
          console.error(err);
    });  
  };

  return beerFactory;

});