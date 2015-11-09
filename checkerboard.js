var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
                    
//Set a square to a player
function setSquare(player, row, col) {
    checkerboard [row] [col] = player;
}

//What piece (or none)  is at a particular square
function getPieceAt(row, col) {
    return checkerboard[row][col];
}

//Reset board to null in every square
function clearBoard() {
    for(var row= 0;row<8;row++){
        for(var col=0;col<8;col++){
            checkerboard[row][col] = null;
        }
    }
}
//Track piece ocation via associative array
var pieces = {'red':[],
    'black':[]
};

//Set up red pieces and push location to pieces
function setUpRed() {
    for(var row=0;row<3;row++){
        if(row%2!==0){
        for(var col=1;col<8;col+=2){
            checkerboard[row][col] = "R";
            pieces.red.push([row,col]);
        }
        } else {
          for(col=0;col<8;col+=2){  
            checkerboard[row][col] = "R";
            pieces.red.push([row,col]);  
        }
    }   
    }
}

//Set up black pieces and push location to pieces
function setUpBlack() {
    for(var row=5;row<8;row++){
        if(row%2!==0){
        for(var col=1;col<8;col+=2){
            checkerboard[row][col] = "B";
            pieces.black.push([row,col]);
        }
        } else {
          for(col=0;col<8;col+=2){  
            checkerboard[row][col] = "B";
            pieces.black.push([row,col]);  
        }
    }   
    }
}

//Testing
setUpRed();
setUpBlack();
console.log(checkerboard);
console.log(pieces);