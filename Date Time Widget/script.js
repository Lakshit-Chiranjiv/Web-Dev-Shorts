const timePara = document.querySelector('#time');
const datePara = document.querySelector('#date');
const dayPara = document.querySelector('#day');
const monthYearPara = document.querySelector('#month-year');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(() => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if (hour < 10) {
        hour = `0${hour}`
    }

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    timePara.innerHTML = `${hour}:${minutes}`
    datePara.innerHTML = `${date.getDate()}`
    dayPara.innerHTML = `${days[day]}`
    monthYearPara.innerHTML = `${months[month]} ${year}`
}, 1000);