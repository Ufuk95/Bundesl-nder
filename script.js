
let bundeslaender = [];
let letters = ['B','H','M','N','R','S','T']

async function init(){
    let resp = await fetch('bundesland.json');
    bundeslaender = await resp.json();

    render();
    renderLetters()
}

function render(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < bundeslaender.length; i++) {
        const bundesland = bundeslaender[i];
        const population = (bundesland['population'] + '').replace('.', ',');
        content.innerHTML += `
        <a class="bbox" href="${bundesland['url']}" target="_blank">
            <div>${bundesland['name']}</div>
            <div class="text-grey">${population} Mio.</div>
        </a>`;
    }
}

function renderLetters(){
    let letterBox = document.getElementById('letter-box');
    letterBox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        
        letterBox.innerHTML += `
        <div>
            <button class="letter" onclick="choosenLetter()">${letter}</button>
        </div>`;
    }
}

function choosenLetter(letter) {
    const filteredBundeslaender = bundeslaender.filter(bundesland => bundesland.name.charAt(0) === letter);

    renderFilteredBundeslaender(filteredBundeslaender);
}

function renderFilteredBundeslaender(filteredBundeslaender) {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < filteredBundeslaender.length; i++) {
        const bundesland = filteredBundeslaender[i];
        const population = (bundesland['population'] + '').replace('.', ',');
        content.innerHTML += `
        <a class="bbox" href="${bundesland['url']}" target="_blank">
            <div>${bundesland['name']}</div>
            <div class="text-grey">${population} Mio.</div>
        </a>`;
    }
}

function renderLetters() {
    let letterBox = document.getElementById('letter-box');
    letterBox.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];

        letterBox.innerHTML += `
        <div>
            <button class="letter" onclick="choosenLetter('${letter}')">${letter}</button>
        </div>`;
    }
}
