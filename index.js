
let computerNumber
let userNumbers = [] // Cria uma Array vazia
let attempts = 1 // variável inicializada
let maxguesses = 10 // Número máximo de tentativas
 
function newGame() {
    window.location.reload()
}

// Função que gerá o número de forma randômica
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    //console.log(computerNumber)
}

//Função que irá comparar os números e imprimir no HTML os números inseridos pelo usuário
function compareNumbers() {
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    // Imprime o número de tentativas
    
    document.getElementById('attempts').innerHTML = attempts
    
    // if para rodar o programa no número de vezes definito no "maxguesses"
    if (attempts < maxguesses) {
    // If else para informar se o número está maior ou menor do que o escolhido pelo computador
    if (userNumber > computerNumber){
        document.getElementById('textOutput').innerHTML = 'Your number is too high'
        // Zera o campo para vazio após executar
        document.getElementById('inputBox').value = ''
        // adiciona +1 no Attempts
        attempts++
    }
    else if (userNumber < computerNumber){
        document.getElementById('textOutput').innerHTML = 'You number is too low'
        // Zera o campo para vazio após executar
        document.getElementById('inputBox').value = ''
        attempts++
    }
    else {
        document.getElementById('textOutput').innerHTML = 'Congratulations! You right!'
        attempts++
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') // Não permite digitar quando ganha
    }
}
// caso rode mais de 10x, imprime está mensagem + o número que o computador definiu:
else {
    document.getElementById('textOutput').innerHTML = 'Max tentatives, the computer number was: ' + computerNumber
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') // Não permite digitar quando perde
    }
}

