let colors = ["#fa654b","#eefa4b","#51fa4b","#4bfad4","#4bc3fa","#4b6bfa","#9d4bfa","#fa4bfa","#ffffff"];
let techs = ["react","ethereum","aftereffects","angular","c","cpp","css","django","docker","figma","gatsby","google","googlecloud","heroku","html","indesign","java","javascript","kotlin","materialui","nextjs","nodejs","photoshop","premiere","python","redux","svelte","typescript","vue","webpack"];
let helper = document.querySelector('.helper');
let scaleValue = 1;
let body = document.querySelector('body');

setInterval(()=>{
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    helper.style.color = randomColor;
},2000)


setInterval(()=>{
    if(scaleValue === 1){
        helper.style.transform = 'scale(1.2)';
        scaleValue = 1.2;
    }
    else{
        helper.style.transform = 'scale(1)';
        scaleValue = 1;
    }
},1000)

document.addEventListener('mousemove',(e)=>{
    let lang = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    lang.style.left = `${x}px`;
    lang.style.top = `${y}px`;
    body.appendChild(lang);

    let size = Math.random() * 60;
    lang.style.width = `${size}px`;
    lang.style.height = `${size}px`;
    let randomTech = techs[Math.floor(Math.random()*techs.length)];
    // lang.style.background = `url(./../assets/techs/${randomTech})`;
    // inlang.style.setProperty('--bgimg',`url(./../assets/techs/${randomTech})`);

    let rotateVal = Math.random() * 360;
    lang.style.transform = `rotate(${rotateVal}deg)`;

    setTimeout(()=>{
        lang.remove();
    },1000);
})