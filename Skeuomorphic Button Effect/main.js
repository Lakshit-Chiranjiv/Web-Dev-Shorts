
let ch = document.getElementsByClassName('check')[0];
let d = document.getElementsByClassName('buttons')[0];
let o = document.getElementsByClassName('o-icon')[0];
let x = document.getElementsByClassName('x-icon')[0];

let res = document.getElementById('reset');

ch.addEventListener('change',()=>{
    if(ch.checked)
    {    
        d.classList.add('switched');
        o.style.fontSize = '22px';
        o.style.color = 'green';
        x.style.fontSize = '18px';
        x.style.color = 'red';
    }
    else
    {
        d.classList.remove('switched');
        x.style.fontSize = '22px';
        x.style.color = 'green';
        o.style.fontSize = '16px';
        o.style.color = 'red';
    }
});

res.addEventListener('click',()=>{
    o.style.fontSize = '18px';
    o.style.color = 'goldenrod';
    x.style.fontSize = '22px';
    x.style.color = 'grey';
});
