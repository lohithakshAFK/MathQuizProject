player1_name = localStorage.getItem("Player1_name");
player2_name = localStorage.getItem("Player2_name");
player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question turn =" + player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn =" + player2_name;

function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    answer = parseInt(number1) * parseInt(number2);
    question_turn = "player1";
    answer_turn = "player2";

    title = "<h3>Find The Answer</h3><br><br>";
    number = number1 + " x " + number2 + "<br>";
    input = "<input class='form-control' id='answer_input' placeholder='Enter Your Answer'><br><br>";
    button = "<button class='btn btn-danger' onclick='send_answer()'>Send</button>";
    row = title + number + input + button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").innerHTML = "";
    document.getElementById("number_2").innerHTML = "";
}

question_turn = "player1";
answer_turn = "player2";

function send_answer(){
        user_answer = document.getElementById("answer_input").value;
        if(user_answer == answer){
            if(answer_turn == "player1"){
                player1_score = player1_score + 1;
                document.getElementById("player1_score").innerHTML = player1_score;
            }
            else if(answer_turn == "player2"){
                player2_score = player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score;
            }
        }

        if(question_turn == "player1"){
            question_turn = "player2";
            document.getElementById("player_question").innerHTML = "Question turn = " + player2_name;
        }
        else{
            question_turn = "player1";
            document.getElementById("player_question").innerHTML = "Question turn = " + player1_name;
        }

        if(answer_turn == "player1"){
            answer_turn = "player2";
            document.getElementById("player_answer").innerHTML = "Answer turn = " + player2_name;
        }
        else{
            answer_turn = "player1";
            document.getElementById("player_answer").innerHTML = "Answer turn = " + player1_name;
        }

        document.getElementById("output").innerHTML = "";
}