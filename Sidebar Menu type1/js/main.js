const listItems = document.querySelectorAll('.nav-item');
const iconItems = document.querySelector('.item-icon');
const toggler = document.querySelector('.toggler');
const navbar = document.querySelector('.navbar');

const activateCurrentItem = (e) => {
    listItems.forEach((item) => {
        item.classList.remove('active-item');
    });
    // this.classList.add('active-item'); //not working, this is undefined
    let tagClicked = e.target;
    while(tagClicked.tagName !== "LI" && (tagClicked.tagName === "SPAN" ||tagClicked.tagName === "A" ||tagClicked.tagName === "I")){
        tagClicked = tagClicked.parentElement;
    }
    if(tagClicked.tagName === "LI")
        tagClicked.classList.add('active-item');
}

listItems.forEach((item) => {
    item.addEventListener('click',activateCurrentItem);
    item.addEventListener('click',() => console.log(this));
});

toggler.addEventListener('click',()=>{
    toggler.classList.toggle('active');
    navbar.classList.toggle('active');
})