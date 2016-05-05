// The Requires
var charGen = require("./CharGenerator.js").charGen;
var statGen = require('./statBlockGen.js').statGen

// Make an instance
// hmm some trouble with chargen.
// var rookie = new charGen;
// console.log(rookie.Race);

// statgen seems to work fine
var statblock = new statGen;
console.log(statblock.block)