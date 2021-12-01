console.log('pasword')

const overlay_show = document.getElementById('ov1');
const overlay_hide = document.getElementById('ov2');
const overlay_full = document.getElementById('ov3');
const password_input = document.getElementById('pass-inputid');
const show_icon = document.getElementsByTagName('i')[1];
const hide_icon = document.getElementsByTagName('i')[2];
const submit_btn = document.getElementById('sub-inputid');


const TogglePassword = () =>{

    if(password_input.getAttribute('type') === 'password')
    {
        password_input.setAttribute('type','text');
        overlay_show.style.visibility = 'hidden';
        overlay_hide.style.visibility = 'visible';
        overlay_full.style.visibility = 'visible';
        password_input.style.color = 'black';
        password_input.style.zIndex = '2';
    }
    else
    {
        password_input.setAttribute('type','password');
        overlay_hide.style.visibility = 'hidden';
        overlay_show.style.visibility = 'visible';
        overlay_full.style.visibility = 'hidden';
        password_input.style.color = 'white';
        password_input.style.zIndex = '0';
    }

    overlay_full.classList.toggle('overlay-full');
    password_input.classList.toggle('pass-inputplace');

};

show_icon.addEventListener('click',TogglePassword);
hide_icon.addEventListener('click',TogglePassword);

submit_btn.addEventListener('mousedown',(e) => {
    e.preventDefault();

    submit_btn.classList.toggle('btn-clicked');
});

submit_btn.addEventListener('mouseup',(e) => {
    e.preventDefault();

    submit_btn.classList.toggle('btn-clicked');
});
