const buttons = Array.from(document.querySelectorAll('.buttons-section'))
let valueA = ''
let valueB = ''
let action = ''
let displayInput = document.querySelector('.output-window')
buttons.forEach(function (entry) {
    entry.addEventListener("click", element => {
        if(element.target.matches('.button-number')){
            if (!action) {
                valueA += element.target.innerText
                displayInput.value = valueA
                return
            }
			
            valueB += element.target.innerText
            displayInput.value = valueB
            return
        }
        if(element.target.matches('.button-action')){
            if (!valueA) {
                valueA = '0'
            }
            action = element.target.innerText
            return
        }
        if(element.target.matches('.button-service')){
            if (element.target.innerText === '=') {
                if (valueA && valueB && action) {
                    let result = 0
                    switch(action) {
                        case '+': {
                            result = Number(valueA) + Number(valueB)
                            break
                        }
                        case '-': {
                            result = Number(valueA) - Number(valueB)
                            break
                        }
                        case '/': {
                            result = Number(valueA) / Number(valueB)
                            break
                        }
                        case '*': {
                            result = Number(valueA) * Number(valueB)
                            break
                        }
                        case '%': {
                            result = Number(valueA) % Number(valueB)
                            break
                        }
                    }
                    displayInput.value = result
                    valueA = result
                    valueB = ''
                }
            }
        }
    });

