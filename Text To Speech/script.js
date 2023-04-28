const textInput = document.querySelector('#textInput');
const btn = document.querySelector('#btn');
const msg = document.querySelector('#msg');
const err = document.querySelector('#error');

// SpeechSynthesisUtterance() is a constructor function

const speak = (text) => {
    if (speechSynthesis.speaking) {
        console.error('Already Speaking...');
        return;
    }
    if (text !== '') {
        const msg = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(msg);
        msg.onend = () => {
            console.log('Done Speaking...');
            msg.textContent = 'Your text, amplified'
        }
    }
}

btn.addEventListener('click', () => {
    const text = textInput.value;
    msg.textContent = 'Processing...';
    if (text === '') {
        err.textContent = 'Please Enter Text';
        err.classList.remove('hidden');
        return;
    }

    err.classList.add('hidden');
    speak(text);
    msg.textContent = 'Speaking...'
})