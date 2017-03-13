var mongoose = require('mongoose');
var Schema = mongoose.Schema; //the function that constructs objects

var beerSchema = new Schema ({ 
  name: {type:String},
  style: {type:String},
  image:{type:String},
  abv: {type:Number},
});

var Beer = mongoose.model('Beer', beerSchema); 
module.exports = Beer; //same as returning object

//when we require this file we want to return the object that was assigned to module.export.

