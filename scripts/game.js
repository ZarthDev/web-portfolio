class SaveGame {
    constructor ( ) {
        this.points = 0;
        if ( localStorage.getItem('score') === null ) {
            localStorage.setItem('score', this.points);
        }
    }

    Save ( score ) {
        localStorage.setItem('score', score);
    }

    ShowScore ( ) {
        return localStorage.getItem('score');
    } 
}

class Bird {
    constructor () {
        this.points = 0;
        this.alive = true;
        this.isJumping = false;

        this.birdElement = document.getElementById('bird');
    }

    Jump ( ) {
        this.birdElement.className = 'jump';
        let bird = this.birdElement;

        setTimeout(function () {
            bird.className = '';
        }, 2000);
    }
}

let bird = new Bird();
let saveControl = new SaveGame();


let screenSize = window.innerWidth;

let timeToJump;

if (screenSize >= 767) {
    timeToJump = 2500;
}else{
    timeToJump = 1500;
}

let gamebox = document.getElementById('game-box');

let startGame = false;
let scoreText = document.getElementById('score');

function StartGame ( ) {
    startGame = true;

    let btnStart = document.getElementById('startBtn');

    btnStart.disabled = 'disabled';

    scoreText.innerHTML = "POINTS: 0";

    
    if (startGame) {
        //Spawn Pipes
        let SpanwPipes = setInterval (function ( ) {
            if (startGame) {
                let pipe = document.createElement('div');
                pipe.className = 'pipe-long';
        
                let pipeSprite = document.createElement('img');
                pipeSprite.src = 'images/pipe-long.png';
        
                pipe.id = 'pipe';
        
                gamebox.appendChild(pipe);
                pipe.appendChild(pipeSprite);
        
                console.log(timeToJump);
                console.log(screenSize);

                setTimeout (function ( ) {
                    if (bird.isJumping != true) {

                        if (bird.points > saveControl.ShowScore()) {
                            saveControl.Save(bird.points);
                        }

                        scoreText.innerHTML = `VOCÊ PERDEU!
                        CLIQUE AQUI 
                        PARA REINICIAR! <br> SEU RECORDE FOI: ${saveControl.ShowScore()}`;
    
                        startGame = false; //lose game
                        pipe.remove();
    
                        scoreText.onclick = function ( ) {
                            window.location.href = 'index.html';
                        }
                    }else{
                        bird.points++;
                        scoreText.innerHTML = `POINTS: ${bird.points}`;
                    }
                }, timeToJump);
        
                setTimeout(function ( ) {
                    pipe.remove();
                }, 5000);    
            }
        }, 5000);    
    
        gamebox.onclick = function () {
            bird.Jump();
            bird.isJumping = true;
    
            setTimeout ( function ( ) {
                bird.isJumping = false;
            }, 2000);
        }
    }
}
