const choices = ['rock','paper','scissors'];

//winning criteria
var beats = {
    rock: ['scissors'],
    scissors: ['paper'],
    paper: ['rock']
};

//Initialise player 1 scores
player1_2score = 0;
player1_3score = 0;
player1_4score = 0;

//Initialise player 2 scores
player2_1score = 0;
player2_3score = 0;
player2_4score = 0;

//Initialise player 3 scores
player3_1score = 0;
player3_2score = 0;
player3_4score = 0;

//Initialise player 4 scores
player4_1score = 0;
player4_2score = 0;
player4_3score = 0;

function compare(choice1, choice2) {
    if (beats[choice1].indexOf(choice2) > -1) {
        return 1;
    }
    if (beats[choice2].indexOf(choice1) > -1) {
        return 0;
    }
    return 0;
}

roundNumber = 50;

container = document.getElementById('container');

player_arr = ['Player 1','Player 2','Player 3','Player 4'];

var body = document.body;

for(i=0;i<roundNumber;i++){
    // Player choices display
    player1 = choices[Math.floor(Math.random() * choices.length)];
    player2 = choices[Math.floor(Math.random() * choices.length)];
    player3 = choices[Math.floor(Math.random() * choices.length)];
    player4 = choices[Math.floor(Math.random() * choices.length)];

    chosen = [player1,player2,player3,player4];
    var round_header = document.createElement('h2');
    var round_number = document.createTextNode("Round"+(i+1));
    round_header.appendChild(round_number);
    body.appendChild(round_header);
    tableCreate();

    //Player 1 results display
    player1_2score += compare(player1,player2);
    player1_3score += compare(player1,player3);
    player1_4score += compare(player1,player4);

    //Player 2 results display
    player2_1score += compare(player2,player1);
    player2_3score += compare(player2,player3);
    player2_4score += compare(player2,player4);

    //Player 3 results display
    player3_1score += compare(player3,player1);
    player3_2score += compare(player3,player2);
    player3_4score += compare(player3,player4);

    //Player 4 results display
    player4_1score += compare(player4,player1);
    player4_2score += compare(player4,player2);
    player4_3score += compare(player4,player3);

    resultCreate(player1_2score,player1_3score,player1_4score,
        player2_1score,player2_3score,player2_4score,
        player3_1score,player3_2score,player3_4score,
        player4_1score,player4_2score,player4_3score);
}

//Player choices table
function tableCreate(){
    var tbl = document.createElement('table');
    tbl.style.width = '500px';
    tbl.style.marginTop = '30px';
    tbl.style.border = '1px solid black';

    for(var i = 0;i<2;i++){
        var tr = tbl.insertRow();
        tr.style.border = '1px sold black';
        for(var j = 0;j<4;j++){
            var td = tr.insertCell();
            if(i === 0){
                td.appendChild(document.createTextNode(player_arr[j]));
            }
            else{
                td.appendChild(document.createTextNode(chosen[j]));
                td.style.border = '1px sold black';
            }
        }
    }
    body.appendChild(tbl);
}


// Result display table
function resultCreate(){
    var count = 0;
    var count2 = 0;
    var tbl = document.createElement('table');
    tbl.style.width = '500px';
    tbl.style.marginTop = '30px';
    tbl.style.border = '1px solid black';
    for(var i=0;i<6;i++){
        var tr = tbl.insertRow();
        tr.style.border = '1px solid black';
        for(var j=0;j<6;j++){
            if(i === 0 && (j === 3 || j === 4 || j === 5)){
                break;
            }
            else if( i > 2 && j === 5){
                break;
            }
            else if((i === 1 && (j === 0 || j === 1)) || (i === 0 && j === 1)){
                var td = tr.insertCell();
                td.style.border = '1px solid black';
            }

            else{
                var td = tr.insertCell();
                if(i === 0 && j === 0){
                    td.appendChild(document.createTextNode('Totals'));
                }

                //Player score displays
                else if(i === 2 && j === 3){
                    td.appendChild(document.createTextNode(arguments[0]));
                }
                else if(i === 2 && j === 4){
                    td.appendChild(document.createTextNode(arguments[1]));
                }
                else if(i === 2 && j === 5){
                    td.appendChild(document.createTextNode(arguments[2]));
                }
                else if(i === 3 && j === 1){
                    td.appendChild(document.createTextNode(arguments[3]));
                }
                else if(i === 3 && j === 3){
                    td.appendChild(document.createTextNode(arguments[4]));
                }
                else if(i === 3 && j === 4){
                    td.appendChild(document.createTextNode(arguments[5]));
                }
                else if(i === 4 && j === 1){
                    td.appendChild(document.createTextNode(arguments[6]));
                }
                else if(i === 4 && j === 2){
                    td.appendChild(document.createTextNode(arguments[7]));
                }
                else if(i === 4 && j === 4){
                    td.appendChild(document.createTextNode(arguments[8]));
                }
                else if(i === 5 && j === 1){
                    td.appendChild(document.createTextNode(arguments[9]));
                }
                else if(i === 5 && j === 2){
                    td.appendChild(document.createTextNode(arguments[10]));
                }
                else if(i === 5 && j === 3){
                    td.appendChild(document.createTextNode(arguments[11]));
                }
                else if(i === 0 && j === 2){ 
                    td.setAttribute('colSpan', '4');
                    td.appendChild(document.createTextNode('Against'));
                    td.style.textAlign = 'center';
                }
                else if(i === 1 && j > 1){
                    td.appendChild(document.createTextNode(player_arr[count]));
                    count = count + 1;
                }
                else if((i === 2 && j === 1)|| (i === 3 && j === 0) || (i === 4 && j === 0) || (i === 5 && j === 0)){
                    td.appendChild(document.createTextNode(player_arr[count2]));
                    count2 = count2 + 1;
                }

                else if((i === 2 && j === 2) || (i === 3 && j === 2) || (i === 4 && j === 3) || (i === 5 && j === 4)){
                    td.appendChild(document.createTextNode('-'));
                    td.style.textAlign = 'center';
                }

                else{
                    td.style.border = '1px solid black';
                    
                    if(i === 2 && j === 0){
                        td.appendChild(document.createTextNode('Player wins'));
                        td.setAttribute('rowSpan', '4');
                    }
                }

            }
        }
    }
    body.appendChild(tbl);
}