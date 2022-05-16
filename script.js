const diceValue1 = [
    "SKATE DICE",
    "SKATE DICE",
    "REGULAR",
    "SWITCH",
    "FAKIE",
    "NOLLIE",
];

const diceValue2 = [
    "SKATE DICE",
    "SKATE DICE",
    "FS",
    "FS",
    "BS",
    "BS",
];

const diceValue3 = [
    "SKATE DICE",
    "SKATE DICE",
    "180",
    "180",
    "360",
    "360",
];

const diceValue4 = [
    "SKATE DICE",
    "SKATE DICE",
    "KICKFLIP",
    "KICKFLIP",
    "HEELFLIP",
    "HEELFLIP",
];



const btn = document.querySelector('.roll');
const info = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const overlay = document.querySelector('.overlay');


// Event listeners

info.addEventListener('click', open);

closeBtn.addEventListener('click', close)

btn.addEventListener('click', roll);

// Functions

function open() {
    const pop = document.querySelector('.popUp')
    pop.classList.toggle('active')
    overlay.classList.toggle('active')
}


function close() {
    const pop = document.querySelector('.popUp')
    pop.classList.remove('active')
    overlay.classList.remove('active')
}


function roll() {
    const audio = new Audio();
    audio.src = "./0004526.mp3";
    audio.play();

    const dieValue1 = Math.floor(Math.random() * 6);
    const dieValue2 = Math.floor(Math.random() * 6);
    const dieValue3 = Math.floor(Math.random() * 6);
    const dieValue4 = Math.floor(Math.random() * 6);

    const firstDie = document.querySelector('.die1');
    const secondDie = document.querySelector('.die2');
    const thirdDie = document.querySelector('.die3');
    const fourthDie = document.querySelector('.die4');


    firstDie.innerHTML = diceValue1[dieValue1];
    secondDie.innerHTML = diceValue2[dieValue2];
    thirdDie.innerHTML = diceValue3[dieValue3];
    fourthDie.innerHTML = diceValue4[dieValue4];

}