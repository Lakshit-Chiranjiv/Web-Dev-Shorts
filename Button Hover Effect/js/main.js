const btn1 = document.getElementsByClassName('btn')[0];
const btn2 = document.getElementsByClassName('btn')[1];
const spn1 = document.getElementsByTagName('span')[0];
const spn2 = document.getElementsByTagName('span')[1];


btn1.addEventListener('mousemove',(e)=>{
    let x_cord = e.pageX - btn1.offsetLeft;
    let y_cord = e.pageY - btn1.offsetTop;

    btn1.style.setProperty('--x1-cord',x_cord+"px");
    btn1.style.setProperty('--y1-cord',y_cord+"px");

    spn1.style.color = 'black';
});

btn1.addEventListener('mouseout',()=>{
    spn1.style.color = 'white';
});

btn2.addEventListener('mousemove',(e)=>{
    let x_cord = e.pageX - btn2.offsetLeft;
    let y_cord = e.pageY - btn2.offsetTop;

    btn2.style.setProperty('--x2-cord',x_cord+"px");
    btn2.style.setProperty('--y2-cord',y_cord+"px");

    spn2.style.color = 'black';
});

btn2.addEventListener('mouseout',()=>{
    spn2.style.color = 'white';
});