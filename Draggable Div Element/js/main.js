const dragCard = document.querySelector('.drag');
const cardHead = dragCard.querySelector('h2');

const onDrag = ({movementX,movementY}) => {
    let getStyle = window.getComputedStyle(dragCard);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    dragCard.style.left = `${left + movementX}px`;
    dragCard.style.top = `${top + movementY}px`;
}


dragCard.addEventListener('mousedown',()=>{
    dragCard.classList.add('activeDrag');
    dragCard.addEventListener('mousemove',onDrag);
});

document.addEventListener('mouseup',()=>{
    dragCard.classList.remove('activeDrag');
    dragCard.removeEventListener('mousemove',onDrag);
});