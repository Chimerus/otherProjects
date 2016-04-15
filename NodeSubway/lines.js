var LLine = function(){
  this.name = "L";
  this.stops = ["8th", "6th", "unionSquare", "3rd", "1st"];
};

var NLine = function(){
  this.name = "N";
  this.stops = ["timesSquare", "34th", "28th", "23rd", "unionSquare", "8th"];
};

var SixLine = function(){
  this.name = "6";
  this.stops = ["grandCentral", "33rd", "28th", "23rd", "unionSquare", "astorPlace"];
};

module.exports.NLine = NLine;
module.exports.LLine = LLine;
module.exports.SixLine = SixLine;