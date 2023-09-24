const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const songjump = new Audio('./library/mario_pulando_efeito_sonoro_toquesengracadosmp3.com.mp3'); 
const songdead = new Audio('./library/Super-Mario-Death-Sound-Sound-Effect.mp3'); 

const jump = () => {
    mario.classList.add('jump');
 
    songjump.play();

    setTimeout(() => {  
       mario.classList.remove('jump');
    
    

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

     const pipePosition = pipe.offsetLeft;
     const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
     
     if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
     
       pipe.style.animation = 'none';
       pipe.style.left = `${pipePosition}px`;

       mario.style.animation = 'none';
       mario.style.bottom = `${pipePosition}px`;

       mario.src = "./library/GameOver.gif"
       mario.style.width = '110px'
       mario.style.marginLeft = '50px'
       songdead.play();

       clearInterval(loop);
     }
   
}, 10);

document.addEventListener('keydown', jump);