var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];
function setSquare(player, row, col) {
    // Your Code Here
    checkerboard [row] [col] = player;
}

function getPieceAt(row, col) {
    // Your Code Here
    return checkerboard[row][col];
}

function clearBoard() {
    for(var row= 0;row<8;row++){
        for(var col=0;col<8;col++){
            checkerboard[row][col] = null;
        }
    }
}

function setUpRed() {
    for(var row=0;row<3;row++){
        if(row%2!==0){
        for(var col=1;col<8;col+=2){
            checkerboard[row][col] = "R";
        }
        } else {
          for(col=0;col<8;col+=2){  
            checkerboard[row][col] = "R";  
        }
    }   
    }
}

function setUpBlack() {
    for(var row=5;row<8;row++){
        if(row%2!==0){
        for(var col=1;col<8;col+=2){
            checkerboard[row][col] = "B";
        }
        } else {
          for(col=0;col<8;col+=2){  
            checkerboard[row][col] = "B";  
        }
    }   
    }
}

setUpRed();
setUpBlack();
console.log(checkerboard);