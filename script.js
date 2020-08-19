const buttons = Array.from(document.querySelectorAll('.buttons-section'))
let displayInput = document.querySelector('.output-window')
console.log('buttons=', buttons)
buttons.forEach(function (entry) {
    entry.addEventListener("click", element => {
        if(element.target.matches('.button')){
            displayInput.value += element.target.innerText
    }
    });
});
