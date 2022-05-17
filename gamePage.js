function startGame() {
    number1=document.getElementById("number1").value;
    console.log(number1);
    number2=document.getElementById("number2").value;
    console.log(number2);
    answer=number1*number2;
    console.log(answer);
    equation="<h4>"+number1+"X"+number2+"</h4>";
    console.log("equation");
    input_box="<br>Answer : <input type='text' id='checkInput'>";
    console.log("input_box");
    check_button="<br><br><button id='checkButton' class='btn btn-outline-info' onclick='check()'>Check</button>";
    console.log("check_button");
    column=equation+input_box+check_button;
    console.log("column");
    console.log("check column visible");
    document.getElementById("questionBox").innerHTML=column;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    document.getElementById("numberBox").innerHTML="";
    document.getElementById("startGameButtonBox").innerHTML="";
    console.log("numberBox hidden");
    console.log("startGameButtonBox hidden");
    console.log("question framing box hidden");
}