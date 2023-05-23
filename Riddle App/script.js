const nextBtn = document.querySelector('#btn-next');
const ansBtn = document.querySelector('#btn-ans');
const riddle = document.querySelector('#riddle');
const error = document.querySelector('#error');
const riddleTitle = document.querySelector('#riddle-title');

const loadDiv = document.querySelector('.loadDiv');
const riddleDiv = document.querySelector('.riddleDiv');
const ansDiv = document.querySelector('.ansDiv');

let answer = ''

const key = [apiKey]

const url = 'https://api.api-ninjas.com/v1/riddles'

const getRiddle = async () => {
    loadDiv.classList.remove('hidden');
    riddleDiv.classList.add('hidden');
    ansDiv.classList.add('hidden');
    ansBtn.textContent = 'See Answer👀';
    error.innerHTML = '';
    try{
        const response = await fetch(url, {
            "method": "GET",
            "headers": {
                'X-Api-Key': key
            }
        })
        const data = await response.json();
        const fetchedRiddle = data[0]
        riddleTitle.innerHTML = fetchedRiddle.title;
        riddle.innerHTML = fetchedRiddle.question;
        answer = fetchedRiddle.answer;
        loadDiv.classList.add('hidden');
        riddleDiv.classList.remove('hidden');
        ansDiv.classList.remove('hidden');
    }
    catch(err){
        error.innerHTML = 'Something went wrong!'
        loadDiv.classList.add('hidden');
    }
}

const showAnswer = () => {
    ansBtn.textContent = answer;
} 

window.onload = () => getRiddle();
nextBtn.addEventListener('click', getRiddle);

ansBtn.addEventListener('click', showAnswer);