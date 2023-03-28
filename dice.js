const button = document.getElementById('button');

let randNum = Math.floor(Math.random() * 6)+1;


if (randNum === 1) {
    let div = document.getElementById('dot');
    div.setAttribute('class', 'one');
} else if (randNum === 2){
    let div = document.getElementById('dot');
    div.setAttribute('class', 'two');
} else if (randNum === 3){
    let div = document.getElementById('dot');
    div.setAttribute('class', 'three');
} else if (randNum === 4){
    let div = document.getElementById('dot');
    div.setAttribute('class', 'four');
} else if (randNum === 5){
    let div = document.getElementById('dot');
    div.setAttribute('class', 'five');
} else if (randNum === 6){
    let div = document.getElementById('dot');
    div.setAttribute('class', 'six');
} else {
    console.log('Error')
}

const getNewRoll = () => {
    let randNum = Math.floor(Math.random() * 6)+1;

    if (randNum === 1) {
        let div = document.getElementById('dot');
        div.setAttribute('class', 'one');
    } else if (randNum === 2){
        let div = document.getElementById('dot');
        div.setAttribute('class', 'two');
    } else if (randNum === 3){
        let div = document.getElementById('dot');
        div.setAttribute('class', 'three');
    } else if (randNum === 4){
        let div = document.getElementById('dot');
        div.setAttribute('class', 'four');
    } else if (randNum === 5){
        let div = document.getElementById('dot');
        div.setAttribute('class', 'five');
    } else if (randNum === 6){
        let div = document.getElementById('dot');
        div.setAttribute('class', 'six');
    } else {
        console.log('Error')
    }
}

button.onclick = getNewRoll;