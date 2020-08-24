const buttons = Array.from(document.querySelectorAll('.buttons-section'))

let valueA = ''
let valueB = ''
let action = ''
let trigger = false

let displayInput = document.querySelector('.output-window')

function resultFunc(action) {
  let result = 0
  switch (action) {
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
  action = ''
  valueB = ''
  console.log({valueA, valueB, action, result})
}

buttons.forEach(function (entry) {
  entry.addEventListener("click", element => {
    // console.log(element)
    if (element.target.matches('.button-number')) {
      console.log({valueA, valueB})
      if (!action) {
        if (trigger) {
          valueA = ''
          trigger = false
        }
        valueA += element.target.innerText
        displayInput.value = valueA
        return
      }
      valueB += element.target.innerText
      displayInput.value = valueB
      console.log({valueA, valueB})
      return
    }
    if (element.target.matches('.button-action')) {
      if (!valueA) {
        valueA = '0'
      }
      if (valueB) {
        resultFunc(action)
      }
      action = element.target.innerText
      return
    }
    if (element.target.matches('.button-service')) {
      if (element.target.innerText === '=') {
        trigger = true
        if (valueA && valueB && action) {
          resultFunc(action)
        }
        action = ''
      }
      if (element.target.innerText === 'C') {
        valueA = ''
        valueB = ''
        action = ''
        displayInput.value = 0
      }
    }
  });
});

document.addEventListener("keypress", function onPress(event) {
  let key = event.key
  const availableKeys = /(\d|\+|\-|\/|\*|\=)/
  if (key === 'Enter') key = '='
  if (availableKeys.test(key)) {
    const elements = Array.from(document.querySelectorAll('.button')).filter(item => item.innerText === key)
    elements[0].click()
  }
});