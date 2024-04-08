// console.log('Hello!');

const random=((Math.random()*10+1));

const submit =document.querySelector('#subt')

const userinput=document.querySelector('#guessfield')

const guessslot=document.querySelector('.guesses')
const remaining=document.querySelector('.last Result')
const lowORhi=document.querySelector('.lowerhi')
const startover=document.querySelector('.resultparas')

const p= document.createElement('p')
let preguess=[]

let numguess=1

let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){

        e.preventDefault()
        const guess=parseInt(userinput.value)
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }else if(guess<1){
        alert('please enter a number more then 1')
    }
    else if (guess>100){
        alert('please enter a number less then 100')
    }else{
        preguess.push(guess)
        if(numguess===11){
            displayguess(guess)
            displaymessage(`Game over.Random number was${random}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }

}
function checkguess(guess){

    if(guess==random){

        displaymessage('you guessed it right')
        endgame()
    }else if (guess<random){
        displaymessage('number is to low')
    }
    else if (guess>random){
        displaymessage('number is to High')
    }

}
function displayguess(guess){

userinput.value=''
guessslot.innerHTML+=`${guess}, `
numguess++
remaining.innerHTML=`${11-numguess}`

}

function displaymessage(message){

    lowORhi.innerHTML=`<h2>${message}</h2>`

}

function newgame(){

    const  newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
        random=parseInt(Math.random()*100+1)
        preguess=[]
        numguess=1
        guessslot.innerHTML=''
        remaining.innerHTML=`${11-numguess}`
        userinput.removeAttribute('disabled')
        startover.removeChild(p)

        playgame=true
    })

}

function endgame(){

userinput.value=''
userinput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h2 id="newgame">start new game</h2>`
playgame=false
newgame();
}