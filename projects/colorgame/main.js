let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.getElementsByClassName("square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset")
let modeButtons = document.querySelectorAll(".mode");


init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for( let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        }); 
    }
}

function setupSquares() {
    for(i = 0; i < squares.length; i++) {
        
        squares[i].addEventListener("click", function() {
            
            let clickedColor = this.style.background;
            
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play again?";
            }
            else
                {
                    this.style.background = "whitesmoke";
                    messageDisplay.textContent = "Try Again";
                }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for(let i = 0; i < squares.length; i++) {
            if(colors[i]) {
                squares[i].style.display = "block";
                squares[i].style.background = colors[i];
            }
            else
            {
                squares[i].style.display = "none";
            }
        }

    h1.style.background = "darkslategray";
    
}

 resetButton.addEventListener("click", function(){
    reset();
}); 

function changeColors(color) {

    for(let i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr.push( randomColor() );
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}