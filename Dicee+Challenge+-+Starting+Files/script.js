let dice1 = document.getElementsByClassName('img1')[0]
let dice2 = document.getElementsByClassName('img2')[0]
let winner = document.getElementsByTagName('h1')[0]

let diceList = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png',]

let randomDicePlayer1 = Math.floor(Math.random() * diceList.length)
let randomDicePlayer2 = Math.floor(Math.random() * diceList.length)

dice1.setAttribute('src', './images/' + diceList[randomDicePlayer1])
dice2.setAttribute('src', './images/' + diceList[randomDicePlayer2])


if(randomDicePlayer1 > randomDicePlayer2){
    winner.textContent = 'Player 1 wins!'
}else if(randomDicePlayer2 > randomDicePlayer1){
    winner.textContent = 'Player 2 wins!'
}else{
    winner.textContent = 'Draw!'
}
