const listItems = document.querySelectorAll('.nav-item');
const iconItems = document.querySelector('.item-icon');

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
})

console.log(listItems[0].tagName);
console.log(iconItems.tagName.srcElement);
console.log(iconItems.parentElement.tagName);