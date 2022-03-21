// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
let qrdiv = document.querySelector('.qr');
let qrImg = document.querySelector('.qr-img');
let genBtn = document.querySelector('#gen');
let remBtn = document.querySelector('#remv');
let inp = document.querySelector('input');
let err = document.querySelector('p');

genBtn.addEventListener('click',async()=>{
    if(inp.value){
        err.style.visibility = 'hidden';
        await loadQR(inp.value);
        qrdiv.classList.add('active');
        genBtn.textContent = 'Generate QR Code';
    }
    else{
        err.style.visibility = 'visible';
        setTimeout(()=>{
            err.style.visibility = 'hidden';
        },4000)
    }
})

remBtn.addEventListener('click',()=>{
    qrImg.src = '';
    qrdiv.classList.remove('active');
    inp.value = '';
})

const loadQR = (qrText) => {
    genBtn.textContent = 'Generating...';
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`;
}