const button = document.getElementById('button');
const extraDie = document.getElementById('extra-die');

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

extraDie.addEventListener('click', function() {
    extraDie.innerHTML= '';
    extraDie.setAttribute('class', 'box secondbox');
    extraDie.removeAttribute('id');
    const innerDiv = document.createElement('div');
    document.querySelector(".secondbox").appendChild(innerDiv);
    innerDiv.setAttribute('id', 'dot');
    innerDiv.setAttribute('class', 'one inner-secondbox');
})

//Testing New Code

const getNewRollAll = () => {
    let randNum = Math.floor(Math.random() * 6)+1;
    //let randNum2 = Math.floor(Math.random() * 6)+1;

    let div = document.getElementById('dot');
    //let div2 = document.querySelector('.inner-secondbox');


    if (randNum === 1) {
        div.setAttribute('class', 'one');
    } else if (randNum === 2){
        div.setAttribute('class', 'two');
    } else if (randNum === 3){
        div.setAttribute('class', 'three');
    } else if (randNum === 4){
        div.setAttribute('class', 'four');
    } else if (randNum === 5){
        div.setAttribute('class', 'five');
    } else if (randNum === 6){
        div.setAttribute('class', 'six');
    } else {
        console.log('Error')
    }

    let randNum2 = Math.floor(Math.random() * 6)+1;
    let div2 = document.querySelector('.inner-secondbox');

    if (randNum2 === 1) {
        div2.setAttribute('class', 'one inner-secondbox');
    } else if (randNum2 === 2){
        div2.setAttribute('class', 'two inner-secondbox');
    } else if (randNum2 === 3){
        div2.setAttribute('class', 'three inner-secondbox');
    } else if (randNum2 === 4){
        div2.setAttribute('class', 'four inner-secondbox');
    } else if (randNum2 === 5){
        div2.setAttribute('class', 'five inner-secondbox');
    } else if (randNum2 === 6){
        div2.setAttribute('class', 'six inner-secondbox');
    } else {
        console.log('Error')
    }

}

button.onclick = getNewRollAll;
