'use strict';

function Car (name, model, vehicleType) {

    this.name = name || 'General';
    this.model = model || 'GM';
    this.vehicleType = vehicleType;
    
    if (this.vehicleType === 'trailer'){
         this.numOfWheels = 8;
         this.isSaloon = false;
    } else {
         this.numOfWheels = 4;
         this.isSaloon = true;
    }
    if (this.name === "Porshe" || this.name === "Koenigsegg") {
      this.numOfDoors = 2;
    }else {
      this.numOfDoors = 4;
    }
    
    this.speed = '0 km/h';
   this.drive = function (gear) {
    if (gear === 5) {
      this.speed = "250 km/h";
    } else if (gear === 7){
     this.speed = "77 km/h";
    }
        return this;
}}



  
module.exports = Car;