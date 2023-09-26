function adicionarCaracter(num) {
    const valorDisplay = document.querySelector('.display').value
    
    document.querySelector('.display').value = valorDisplay + num
}

function limpatela() {
    document.querySelector('.display').value = ""
}

function calcular() {
    const valorDisplay = document.querySelector('.display').value

    document.querySelector(".display").value = eval(valorDisplay)
}

function inverteNumero() {
    const valorDisplay = document.querySelector('.display').value

    document.querySelector(".display").value = valorDisplay * -1
}