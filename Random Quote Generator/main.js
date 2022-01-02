
//button clicks
let btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mousedown',()=>{
        btns[i].classList.add('btn-click');
    });

    btns[i].addEventListener('mouseup',()=>{
        btns[i].classList.remove('btn-click');
    });
}
// ----------------------------------
//light-dark mode

let moon = document.querySelector('.dark');
let sun = document.querySelector('.light');
let p = document.querySelectorAll('p');
let card = document.querySelector('.quote-card');
let h2 = document.querySelector('h2');

sun.addEventListener('click',()=>{
    sun.style.display = 'none';
    moon.style.display = 'block';
    card.style.backgroundColor = 'white';
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = 'black';
    }
    h2.style.color = 'black';
});

moon.addEventListener('click',()=>{
    moon.style.display = 'none';
    sun.style.display = 'block';
    card.style.backgroundColor = 'black';
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = 'white';
    }
    h2.style.color = 'white';
});
// -------------------------------

//random quote generate 

let gen_new_quote_btn = document.querySelector('.generate');
let quote_text = document.querySelector('.quote');
let quoter = document.querySelector('.quoter');
let loader = document.querySelector('.loader');

function manage_loader(){
    loader.style.display = 'none';
    quote_text.style.visibility = 'visible';
    quoter.style.visibility = 'visible';
    gen_new_quote_btn.style.opacity = 1;
    gen_new_quote_btn.style.pointerEvents = 'auto';
}

async function generate_new_quote(){
    quote_text.style.visibility = 'hidden';
    quoter.style.visibility = 'hidden';
    loader.style.display = 'block';
    gen_new_quote_btn.style.opacity = 0.6;
    gen_new_quote_btn.style.pointerEvents = 'none';
    let quote_data = await fetch('https://api.quotable.io/random');
    let quote = await quote_data.json();
    quote_text.innerHTML = "<i class='bx bxs-quote-left'></i>&nbsp;&nbsp;&nbsp;" +quote.content+ " &nbsp;&nbsp;&nbsp;<i class='bx bxs-quote-right'></i>";
    quoter.innerHTML = "- " + quote.author;
    setTimeout(manage_loader, 2500);
}



gen_new_quote_btn.addEventListener('click',generate_new_quote);

// -------------------------------------



//speak-copy-tweet
let hello = "hello bb"

let speakBtn = document.querySelector('.speak');
let copyBtn = document.querySelector('.copy');
let tweetBtn = document.querySelector('.twitter');

speakBtn.addEventListener('click',()=>{
    let quote_in_sound = new SpeechSynthesisUtterance(`${quote_text.innerText} by ${quoter.innerText}`);
    speechSynthesis.speak(quote_in_sound);
});

copyBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(quote_text.innerText);
    copyBtn.style.backgroundColor = 'lightgreen';
    setTimeout(()=>{
        copyBtn.style.backgroundColor = '#EFEFEF';
    },3000);
});

tweetBtn.addEventListener('click',()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote_text.innerText.trim()}\n\nby ${quoter.innerText}`;
    window.open(tweetUrl,'_blank');
});