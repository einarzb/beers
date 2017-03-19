var app = angular.module('beerList', []);

app.filter('average', function(){
  return function (data){
  var averageRate = data / 2;
  //console.log(averageRate);
    return averageRate;  
  };
});

