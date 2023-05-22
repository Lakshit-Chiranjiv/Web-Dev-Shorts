const textInput = document.querySelector('#textInput');
const searchBtn = document.querySelector('#btn');

const desc = document.querySelector('.desc');
const descout = document.querySelector('.descout');

const descMsg = document.querySelector('#msg');

const error = document.querySelector('#error');

const list = document.querySelector('.list');

const charImg = document.querySelector('#charImg');
const charName = document.querySelector('#charName');
const charDesc = document.querySelector('#charDesc');


const notFoundTexts = ['No results found', 'No character found', 'Oops! No character found', 'No character found. Try again', "Couldn't find the character", "Try something else"]
let notFoundIndex = 0;

const [ts, apikey, hashVal] = [timestamp, publicKey, hash];

const searchCharacter = async (character) => {
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${character}&apikey=${apikey}&hash=${hashVal}&ts=${ts}`)
    const data = await res.json();

    return data;
}

const updateList = async (partialCharacterName) => {
    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${partialCharacterName}&apikey=${apikey}&hash=${hashVal}&ts=${ts}`)
    const data = await res.json();

    const results = data.data.results;
    const listItems = results.map(result => {
        const name = result.name;
        const startIndex = name.toLowerCase().indexOf(partialCharacterName.toLowerCase());
        const endIndex = startIndex + partialCharacterName.length;
        const boldedName = name.slice(0, startIndex) + '<b>' + name.slice(startIndex, endIndex) + '</b>' + name.slice(endIndex);
        return `<p class=listitem>${boldedName}</p>`
    }).join('');

    list.innerHTML = listItems;

    const listItemsArr = document.querySelectorAll('.listitem');
    listItemsArr.forEach(listItem => {
        listItem.addEventListener('click', () => {
            list.innerHTML = '';
            textInput.value = ''
            const character = listItem.textContent;
            const trimmedCharacter = character.trim().replace(/\s/g, '%20');
            searchCharacter(trimmedCharacter).then(data => {
                updateCharacterOutput(data);
            })
        })
    })
}

const updateCharacterOutput = (data) => {
    list.innerHTML = '';
    textInput.value = ''
    if(data.data.results.length === 0) {
        descMsg.textContent = notFoundTexts[notFoundIndex];
        notFoundIndex++;
        notFoundIndex = notFoundIndex % notFoundTexts.length;
        desc.classList.remove('hidden')
        descout.classList.add('hidden')
        return
    }
    const {name, description, thumbnail} = data.data.results[0];
    const imgSrc = `${thumbnail.path}.${thumbnail.extension}`;

    charImg.src = imgSrc;
    charName.textContent = name;
    charDesc.textContent = description;

    desc.classList.add('hidden')
    descout.classList.remove('hidden')
}



searchBtn.addEventListener('click', () => {
    const character = textInput.value;
    
    if(character === '') {
        error.textContent = 'Please enter a character name';
        error.classList.remove('hidden')
        return
    }
    error.classList.add('hidden')
    textInput.value = '';
    const trimmedCharacter = character.trim().replace(/\s/g, '%20');

    searchCharacter(trimmedCharacter).then(data => {
        updateCharacterOutput(data);
    })
})

textInput.addEventListener('keyup', (e) => {
    const character = e.target.value;
    const trimmedCharacter = character.trim().replace(/\s/g, '%20');

    updateList(trimmedCharacter);
})