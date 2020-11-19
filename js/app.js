const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const mathResult = document.querySelector('h1')
const input = document.getElementById('input')




plusBtn.addEventListener('click', addition)
minusBtn.addEventListener('click', subtraction)


function addition(x, y){
    let result = parseInt(mathResult.innerHTML) + parseInt(input.value)
    mathResult.innerHTML = result
    if(result < 0) 
        mathResult.style.color = 'red'

    console.log(`input: ${input.value}`)
    console.log(`result: ${result}`)
}



function subtraction(x, y){
    let result = parseInt(mathResult.innerHTML) - parseInt(input.value)
    mathResult.innerHTML = result
    if(result < 0) 
        mathResult.style.color = 'red'
    console.log(`input: ${input.value}`)
    console.log(`result: ${result}`)
}