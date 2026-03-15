const container = document.querySelector('.container');
const backgroundColor = document.getElementById('background-color');
const submitColor = document.getElementById('submit-color');
const reset = document.getElementById('reset');

submitColor.addEventListener('click', ()=> {
    container.style.backgroundColor = backgroundColor.value;
})

reset.addEventListener('click', ()=> {
    container.style.backgroundColor = "#d6baa3";
})