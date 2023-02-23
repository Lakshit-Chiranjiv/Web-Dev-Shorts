const hr = document.querySelector('#hour');
const mn = document.querySelector('#minute');
const sc = document.querySelector('#second');

const hrDiv = document.querySelector('.hr');
const mnDiv = document.querySelector('.min');
const scDiv = document.querySelector('.sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    let htime = day.getHours();
    let mtime = day.getMinutes();
    let stime = day.getSeconds();

    if (htime < 10) {
        htime = "0" + htime;
    }
    if (mtime < 10) {
        mtime = "0" + mtime;
    }
    if (stime < 10) {
        stime = "0" + stime;
    }

    hr.innerHTML = htime;
    mn.innerHTML = mtime;
    sc.innerHTML = stime;


    hrDiv.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mnDiv.style.transform = `rotateZ(${mm}deg)`;
    scDiv.style.transform = `rotateZ(${ss}deg)`;

    hr.style.transform = `rotateZ(-${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(-${mm}deg)`;
    sc.style.transform = `rotateZ(-${ss}deg)`;
})