let num = 42
let FirstMame = 'irakly'
const isProgrammer = true
/*console.log('test:', FirstMame)
console.log(num + 10)
let num2 = num + 10
console.log(num2)
 */
const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitEl = document.getElementById('submit')
const plusEl = document.getElementById('plus')
const minusEl = document.getElementById('minus')
let action = '+'

plusEl.onclick = function () {
    action = '+'
}
minusEl.onclick = function () {
    action = '-'
}

submitEl.onclick = function () {

    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        resultElement.textContent = sum
    } else {
        const sum = Number(input1.value) - Number(input2.value)
        resultElement.textContent = sum
    }
}

