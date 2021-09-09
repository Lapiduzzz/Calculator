let button = document.getElementsByClassName('button')
let displayValue = document.querySelector('.value')
let displayResult = document.querySelector('.result')
let newArr = [...button].forEach( el => addEventListener("click", click))

let value = ''
let result = null

function calculate(num){
    if(value === null){
        value = num
    }
    else value +=num
    displayValue.innerText = value
}

function click(e){
    switch (e.target.id){
        case '1': calculate('1')
            break
        case '2': calculate('2')
            break
        case '3': calculate('3')
            break
        case '4': calculate('4')
            break
        case '5': calculate('5')
            break
        case '6': calculate('6')
            break
        case '7': calculate('7')
            break
        case '8': calculate('8')
            break
        case '9': calculate('9')
            break
        case '0': calculate('0')
            break
        case 'd': calculate('.')
            break
        case 'CE':
            value = value.substring(0, value.length-1)
            displayValue.innerText = value
            break
        case 'plus': calculate('+')
            break
        case 'minus': calculate('-')
            break
        case 'divide': calculate('/')
            break
        case 'multiply': calculate('*')
            break
        case 'equal': answer(value)
            break
        case 'bracket1': calculate('(')
            break
        case 'bracket2': calculate(')')
            break
        case 'clear':
            value = ''
            displayValue.innerText = value
            result = null
            displayResult.innerText = result
            break
    }
}

function answer(value){
    'use strict'
    result = eval(value)
    displayResult.innerText = result
    let res = result.toString()
    if (res.length > 16){
        displayResult.style.fontSize = '45px'
    }
    else displayResult.style.fontSize = '60px'
}




