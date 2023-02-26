const nameInput = document.querySelector('#nameInput');
const btn = document.querySelector('#btn');

const err = document.querySelector('#error');

const outputDiv = document.querySelector('.outputDiv');
const descDiv = document.querySelector('.desc');
const loadDiv = document.querySelector('.load');
const contentDiv = document.querySelector('.content');
const unknownDiv = document.querySelector('.unknown');

const output = document.querySelector('#output');
const nameGiven = document.querySelector('#name');
const maleImg = document.querySelector('#male');
const femaleImg = document.querySelector('#female');
const prob = document.querySelector('#prob');

const baseURL = 'https://api.genderize.io/?name=';

const fetchGender = async (name) => {
    const res = await fetch(baseURL + name);
    const data = await res.json();
    return data;
}

btn.addEventListener('click', async() => {
    if(nameInput.value === '') {
        err.innerHTML = 'Please enter a name';
        err.classList.remove('hidden');
        return;
    }
    // check for alphabet regex test - /^[a-zA-Z]+$/
    if(!/^[a-zA-Z]+$/.test(nameInput.value)) {
        err.innerHTML = 'Please enter a valid name';
        err.classList.remove('hidden');
        return;
    }
    outputDiv.classList.remove('femaleDiv')
    outputDiv.classList.remove('maleDiv')
    err.classList.add('hidden');
    descDiv.classList.add('hidden');
    contentDiv.classList.add('hidden');
    loadDiv.classList.remove('hidden');
    unknownDiv.classList.add('hidden');

    const responseData = await fetchGender(nameInput.value);
    console.log(responseData);

    if(responseData.gender !== null) {
        nameGiven.innerHTML = responseData.name;
        output.innerHTML = responseData.gender.toUpperCase()
        prob.innerHTML = responseData.probability * 100 + '%';
    }

    if(responseData.gender === 'male'){
        outputDiv.classList.add('maleDiv')
        outputDiv.classList.remove('femaleDiv')
        maleImg.classList.remove('hidden');
        femaleImg.classList.add('hidden');
    }
    else if(responseData.gender === 'female'){
        outputDiv.classList.add('femaleDiv')
        outputDiv.classList.remove('maleDiv')
        maleImg.classList.add('hidden');
        femaleImg.classList.remove('hidden');
    }
    else {
        unknownDiv.classList.remove('hidden');
        loadDiv.classList.add('hidden');
        return
    }

    loadDiv.classList.add('hidden');
    contentDiv.classList.remove('hidden');
    
})