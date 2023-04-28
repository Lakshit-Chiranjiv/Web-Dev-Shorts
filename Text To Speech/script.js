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
        const speakMsg = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speakMsg);
        speakMsg.onend = () => {
            msg.textContent = 'Your text, amplified'
        }
    }
}

btn.addEventListener('click', () => {
    const text = textInput.value;
    if (text === '') {
        err.textContent = 'Please Enter Text';
        err.classList.remove('hidden');
        return;
    }
    msg.textContent = 'Processing...';
    err.classList.add('hidden');
    speak(text);
    msg.textContent = 'Speaking...'
})