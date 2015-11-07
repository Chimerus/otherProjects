//Classic fizzbuzz, if #/3 fizz, if #/5 buzz, else #
var result;
var max = 20;

for (var idx = 1; idx <= max; idx ++) {
    result = " ";
    if (idx%3 === 0){
        result +="fizz";
        }
    else if (idx%5 === 0) {
        result+="buzz";
        }
    else {
        result+=idx;
    }
    console.log(result);
}