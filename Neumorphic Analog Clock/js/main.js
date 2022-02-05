const dg = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(()=>{

    let day = new Date();
    let h = (day.getHours()-12) * 30;
    let m = day.getMinutes() * dg;
    let s = day.getSeconds() * dg;

    hr.style.transform = `rotateZ(${h + (m/12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;
},1000);