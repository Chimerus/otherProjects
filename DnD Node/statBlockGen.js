var statGen = function() {
  /*generate a stat block by rolling 4d6
    adding highest 3 together, keeping that number. 
    Repeat that 6 times*/
var array = [];
for(var loop =0; loop<6; loop++){
    var stat = [];
//to get the 4d6 roll
    for(var idx=0; idx<4; idx++){
    stat.push(Math.floor((Math.random() * 6)+1));
    }
//drop the lowest
  stat = stat.sort();
  stat.splice(0,1);
//add them together
  var total=0;
  for (idx=0; idx<3; idx++){
  total +=stat[idx];
  }
  //add it to final array
  array.push(total);
}
array = array.sort(function(a, b){return a-b;});
this.block = array;
};

module.exports.statGen = statGen;