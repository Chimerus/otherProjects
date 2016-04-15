var LLine = require("./lines").LLine;
var NLine = require("./lines").NLine;
var SixLine = require("./lines").SixLine;

var el = new LLine;
var en = new NLine;
var six = new SixLine;

// output line names
if (process.argv[2] == "lines") {
  console.log(en.name+", "+el.name+", "+ six.name);
};
// check stops
if (process.argv[2] == "stops") {
  if(process.argv[3] == "L") {
      lineList(el.stops);
    } else if (process.argv[3] == "N") {
      lineList(en.stops);
    } else if (process.argv[3] == "6") {
      lineList(six.stops);
    } else {
      console.log("Not a valid line");
    }
  };

// DRY up the code a bit
function lineList(line){
  console.log("This train stops at:")
  for (stop in line){
    console.log(line[stop]);
    };
};
// Catch errors
if (process.argv[2] == "calculate") {
  if(process.argv[3]==undefined|process.argv[4]==undefined|process.argv[5]==undefined|process.argv[6]==undefined){
    console.log("You must provide the 4 arguments - STARTINGLINE STOPNAME ENDINGLINE STOPNAME");
  } else {
  var enterLine;
  var exitLine;

  switch (process.argv[3]) {
    case "L":
      enterLine = el;
      break;
    case "N":
      enterLine = en;
      break;
    case "6":
      enterLine = six;
      break;

    default:
      console.log("Not a valid line");
  };

    switch (process.argv[5]) {
    case "L":
      exitLine = el;
      break;
    case "N":
      exitLine = en;
      break;
    case "6":
      exitLine = six;
      break;

    default:
      console.log("Not a valid line");
  };
  stopCalc(enterLine, process.argv[4], exitLine, process.argv[6]);
};
};
// Calculate the Number of stops, and if transfer 
function stopCalc(enterLine,enterStop,exitLine,exitStop){

  var enter = enterLine.stops.indexOf(enterStop);
  var enterTransfer = Math.abs(enter-enterLine.stops.indexOf("unionSquare"););

  var exit = exitLine.stops.indexOf(exitStop);
  var exitTransfer = Math.abs(exit-exitLine.stops.indexOf("unionSquare"););
 
  if(enterLine === exitLine) {
    var stops = Math.abs(enter-exit);
    console.log("Your trip from the "+enterStop+" station to the "+exitStop+ " station is "+stops+" stops long."); 
  } else {
    console.log("Your trip from the "+enterStop+" station to the "+exitStop+ " station is "+(enterTransfer+exitTransfer)+" stops long. You will have to make 1 transfer at Union Square to the "+exitLine.name+" line.");
  }
};












