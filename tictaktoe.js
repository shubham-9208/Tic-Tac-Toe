let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let msg = document.querySelector(".msg");
let msgcontainer = document.querySelector(".msg-container");

let turnx = true;
let count = 0;

const winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],

];


// main // after clicking x and O should be appear 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnx) {
            box.innerText = "X";
            box.style.color = "#364958";
            turnx = false;
        } else {
            box.innerText = "O";
            box.style.color = "red";
            turnx = true;
        }
        box.disabled = true;
        // checkwin();
        count++;

        let iswinner = checkwin();
        if (count === 9 && !iswinner) {
            gamedraw();
            // resetbtn();
        }

    });
});

// draw game function
let gamedraw = () => {
    msg.innerHTML = "Draw";
    msgcontainer.classList.remove("hide");
    disabledbtn();
};


// to check the winning pattern
const checkwin = () => {
    for (let win of winner) {
        let pos1val = boxes[win[0]].innerText;
        let pos2val = boxes[win[1]].innerText;
        let pos3val = boxes[win[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log('winner', pos1val);
                show(pos1val);
            };
        };


    };

};


//to show the msg of winner at top 
const show = (winner) => {
    msg.innerText = `winner is ${winner}`;
    msgcontainer.classList.remove('hide')
    disabledbtn();
};


//  disable function to disable the button  
let disabledbtn = () => {
    for (box of boxes) {
        box.disabled = true;
    };
};
// button enable function 
let enabledbtn = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};


// game restart and newgame function
const resetbtn = () => {
    count = 0;
    turnx = true;
    enabledbtn();
    msgcontainer.classList.add("hide");
};


// giving function to the button
reset.addEventListener("click", resetbtn);
newbtn.addEventListener("click", resetbtn);