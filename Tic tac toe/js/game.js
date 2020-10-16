let round = 0;
let field_number = [];

//create 2d field_number
for (let i = 0; i < 3; i++) {
    field_number[i] = [];
}

function point(number) {
    if (document.getElementById(number).innerHTML == "") {
        if (round % 2 == 0) {
            document.getElementById(number).innerHTML = "X"; //insert "X"
            insertToArray(number, 'x'); //insert char to array and check winner
        } else {
            document.getElementById(number).innerHTML = "O"; //insert "O"
            insertToArray(number, 'o'); //insert char to array and check winner
        };
        round += 1;
    }
};

//insert to array
function insertToArray(number, mark) {
    a = number.charAt(0);
    b = number.charAt(number.length - 1);

    field_number[a][b] = mark;

    checkWinner(mark);
}

//checking winner
function checkWinner(mark) {
    if (field_number[0][0] == mark && field_number[0][1] == mark && field_number[0][2] == mark ||
        field_number[1][0] == mark && field_number[1][1] == mark && field_number[1][2] == mark ||
        field_number[2][0] == mark && field_number[2][1] == mark && field_number[2][2] == mark ||

        field_number[0][0] == mark && field_number[1][0] == mark && field_number[2][0] == mark ||
        field_number[0][1] == mark && field_number[1][1] == mark && field_number[2][1] == mark ||
        field_number[0][2] == mark && field_number[1][2] == mark && field_number[2][2] == mark ||

        field_number[0][0] == mark && field_number[1][1] == mark && field_number[2][2] == mark ||
        field_number[0][2] == mark && field_number[1][1] == mark && field_number[2][0] == mark
    ) {
        if (mark == 'x') {
            document.getElementById("winner-h1").innerHTML = "Winner: X"
            document.getElementById("winner-div").style.visibility = "visible";
        } else {
            document.getElementById("winner-h1").innerHTML = "Winner: O!"
            document.getElementById("winner-div").style.visibility = "visible";
        }
    }
    /*else if(
        Array[0][0] !== null && Array[0][1] !== null  && Array[0][2] !== null  &&
        Array[1][0] !== null  && Array[1][1] !==null  && Array[1][2] !== null  &&
        Array[2][0] !== null  && Array[2][1] !== null  && Array[2][2] !== null

    ){ document.getElementById("winner-h1").innerHTML = "Remis!"
         document.getElementById("winner-div").style.visibility = "visible";
    };*/
}

function reset() {

    /*simple clearing button*/
    document.getElementById('00').innerHTML = "";
    document.getElementById('01').innerHTML = "";
    document.getElementById('02').innerHTML = "";
    document.getElementById('10').innerHTML = "";
    document.getElementById('11').innerHTML = "";
    document.getElementById('12').innerHTML = "";
    document.getElementById('20').innerHTML = "";
    document.getElementById('21').innerHTML = "";
    document.getElementById('22').innerHTML = "";

    /*clearing and creating new array*/
    field_number.length = 0;
    field_number = [];

    for (var i = 0; i < 3; i++) {
        field_number[i] = [];
    }

    /*hide div after clicking reset button*/
    document.getElementById("winner-div").style.visibility = "hidden";
}