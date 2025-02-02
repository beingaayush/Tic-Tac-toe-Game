//firtstly we're accessing all elements which we need further
let boxes = document.querySelectorAll(".box"); //here i used querySelectotAll coz multiple classes exist with same name.
let newgamebtn = document.querySelector("#new-game");
const resetbtn = document.getElementById("reset-game");
let winalert = document.querySelector(".winalert");
let winmsg = document.querySelector(".winmsg");



let turnO = true;    //means starting player will be "O"
let count = 0; //to track draw

let winPatterns = [   //these are the winning indices pattern

    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],

];



//newgame button code
const newGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    winalert.classList.add("hide");
};
newgamebtn.addEventListener("click", newGame);



//reset button code
const resetGame = () => {
    boxes.forEach(box => {
        box.textContent = "";  //clear the box content
    });
    turnO = true;     //it reset game variable , starts again with playerO
    enableBoxes();     //this fnx will enable all boxes again
};
resetbtn.addEventListener("click", resetGame);    //



//code for the cells(boxes)
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button clicked");
        if (turnO) { //playerO
            box.innerText = "O";
            turnO = false;        //turnO, false krne pe ab next player ka input hm le skte hai.
        } else { //playerX
            box.innerText = "X";
            box.style.color = "#B892FF";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();   // checkWinner(); //its our callBack fnx.     
        if (count === 9 && !isWinner) {
            gameDraw();
        }
    });
});


//fnx code after the game will draw
const gameDraw = () => {
    winmsg.innerText = "GAME DRAW";
    winalert.classList.remove("hide");
    disableBoxes();
};



//this fnx will disable all boxes
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.innerText = "";
    }
}


//this fnx will enable all boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
}



//this fnx will be call when any of two player will won
const showWinner = (Winner) => {
    winmsg.innerText = `Congratulation, Winner is ${Winner}`
    winalert.classList.remove("hide");
    disableBoxes();
}



//this fnx code will be use to check who is the winner
const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }
    }
};




// code for changing screen mode 

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");

let currMode = "light";

modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});



//All SEt !! :)