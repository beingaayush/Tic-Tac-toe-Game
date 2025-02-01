//firtstly we're accessing those elements which we need further
let boxes = document.querySelectorAll(".box"); //here i used querySelectotAll coz multiple classes exist with same name.
let resetbtn = document.querySelector("#resetbtn");
let newgame = document.querySelector("#newgame");
let winalert = document.querySelector(".winalert");
let winmsg = document.querySelector(".winmsg");



let turnO = true;

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


const resetgamebtn = () =>{
turnO = true;
enableBoxes();
winalert.classList.add("hide");
};


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
        checkWinner(); //its our callBack fnx.
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
        box.innerText = "";
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}

const showWinner = (Winner) =>{
    winmsg.innerText = `Congratulation, Winner is ${Winner}`
    winalert.classList.remove("hide");
disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
        }
        }
    }
};

newgame.addEventListener("click",resetgamebtn);
resetbtn.addEventListener("click",resetgamebtn);

