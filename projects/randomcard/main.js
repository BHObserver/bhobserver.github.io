let button = document.querySelector('button');
let cardDisplay = document.getElementById("cardDisplay");
let textDisplay = document.querySelector("#text");

button.addEventListener('click', function (){
    getCard();
});


function getCard() {
    const value = [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace' ];
    const suit = [ 'clubs', 'diamonds', 'spades', 'hearts'];
    
    function random(arr) {
        const idx = Math.floor( Math.random() * arr.length);
        return arr[idx];
    }
    
    let randomValue = random(value);
    let randomSuit = random(suit);
    
    cardDisplay.innerHTML = `<img src='imgs/${randomValue}${randomSuit}.png'>`;
    textDisplay.innerHTML = (`${randomValue} of ${randomSuit}`);
    
}