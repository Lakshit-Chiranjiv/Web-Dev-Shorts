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

//random generate https://api.quotable.io/random