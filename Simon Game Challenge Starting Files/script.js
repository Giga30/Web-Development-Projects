let colors = ['red', 'blue', 'green', 'yellow']

let gameColor = []
let playerColor = []

let level = 0
let started = false

$(document).keydown(function (e) { 
    if(started === false){
        $('#level-title').text('Level ' + level)
        nextSequence()
        started = true
    }
    
});

function nextSequence(){
    playerColor = []
    level++

    $('#level-title').text('Level ' + level);

    let randNum = Math.floor(Math.random() * 4)
    let randColor = colors[randNum]
    gameColor.push(randColor)
    playSound(randColor)
    $('#' + randColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

$('.btn').click(function (e) {
    playSound(e.target.id)
    animateButton(e.target.id)
    playerColor.push(e.target.id)
    checkAnswer(playerColor.length-1)
});

function animateButton(color){
    $('.' + color).addClass('pressed');
    setTimeout(() => {
        $('.' + color).removeClass('pressed');
    }, 100);
}

function checkAnswer(currentLevel){
    if(gameColor[currentLevel] === playerColor[currentLevel]){
        if(gameColor.length === playerColor.length){
            setTimeout(() => {
                nextSequence()
            }, 1000);
        }
    }
    else{
        console.log(gameColor[currentLevel], gameColor, playerColor[currentLevel], playerColor)
        playSound('wrong')
        $('body').addClass('game-over');
        $('#level-title').text('Game Over, Press Any Key to Restart');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 200);

        startOver()
    }
}

function playSound(sound){
    let audio = new Audio('sounds/' + sound + '.mp3')
    audio.play()
}

function startOver(){
    gameColor = []
    level = 0
    started = false
}