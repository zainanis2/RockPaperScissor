let userScore=0;
let cpuScore=0;

const outcoome = document.getElementById('Result');

const h3=document.createElement('h3');
h3.style.color=('gold');
outcoome.appendChild(h3);

const div=document.getElementById('Check');

const aiScore=document.getElementById('Ai-Score')
aiScore.innerHTML=cpuScore;

const playerScore=document.getElementById('Your-Score')
playerScore.innerHTML=userScore;

const winner=document.getElementById('Winner');



const restart= document.getElementById('Restart');
restart.style.display='none';
restart.addEventListener('click',()=>
{
    userScore=0;
    cpuScore=0;

    aiScore.innerHTML=cpuScore;
    playerScore.innerHTML=userScore;

    outcoome.innerHTML='';
    let remImg = document.getElementById('Ai-Choice');
    remImg.removeChild(remImg.firstChild);
    remImg = document.getElementById('Your-Choice');
    remImg.removeChild(remImg.firstChild);
    div.style.display='block';
    restart.style.display='none';
    winner.style.display='none';
})




const Rock=document.getElementById('Rock');
Rock.addEventListener("click",() =>{

    const cpu=getComputerChoice();
    let x=playRound('rock',cpu);
    h3.innerHTML=x;
    game(x);
    displayChoice('img/'+cpu+'.png','Ai-Choice');
    displayChoice('img/rock.png','Your-Choice');
    isGameEnd();

}
);

const Paper=document.getElementById('Paper');
Paper.addEventListener("click",() =>{
    const cpu=getComputerChoice();
    let x=playRound('paper',cpu);
    h3.innerHTML=x;
    game(x);
    displayChoice('img/paper.png','Your-Choice');
    displayChoice('img/'+cpu+'.png','Ai-Choice');
    isGameEnd();


}
);

const Scissor=document.getElementById('Scissor');
Scissor.addEventListener("click",() =>{

    const cpu=getComputerChoice();
    let x=playRound('scissor',cpu);
    h3.innerHTML=x;
    game(x);
    displayChoice('img/scissor.png','Your-Choice');
    displayChoice('img/'+cpu+'.png','Ai-Choice');
    isGameEnd();



}
);



function displayChoice(path,id)
{
    
    const img = document.createElement('img');
    aiScore.innerHTML=cpuScore;
    playerScore.innerHTML=userScore;


    img.src = path;
    if(id.charAt(0)=='A')
    {
        img.classList.add('flip');
    }
  
        img.classList.add('img-dis');


    const choice = document.getElementById(id);
    if (choice.hasChildNodes()) {
        choice.replaceChild(img, choice.childNodes[0]);
    }

    else {
        choice.appendChild(img);
    }
}



function getComputerChoice()
{
    let choice=["rock","paper","scissor"];
    let x=Math.floor(Math.random()*3);
    return choice[x];
}


function playRound(userChoice,cpuChoice)
{
    if(userChoice==cpuChoice)
    {
        return "ITS DRAW";
    }
    else if (userChoice=="rock"&&cpuChoice=="paper")
    {
        return "YOU LOSE ! Paper beats Rock";
    }
    else if (userChoice=="rock"&&cpuChoice=="scissor")
    {
        return "YOU WIN ! Rock beats Scissor";
    }
    else if (userChoice=="paper"&&cpuChoice=="scissor")
    {
        return "YOU LOSE ! Scissor beats Paper";
    }
    else if (userChoice=="paper"&&cpuChoice=="rock")
    {
        return "YOU WIN ! Paper beats Rock";
    }
    else if (userChoice=="scissor"&&cpuChoice=="paper")
    {
        return "YOU WIN ! Scissor beats Paper";
    }
    else if (userChoice=="scissor"&&cpuChoice=="rock")
    {
        return "YOU LOSE ! Rock beats Scissor";
    }


}

function game(result)
{



        let statement =result;
        console.log(statement);
        let x=statement.substring(4,5);  
        if (x=="W")
        {
            userScore++;   
        }
        else if (x=="L")
        {
            cpuScore++;
        }
        else
        {
            userScore++;  
            cpuScore++;

        }
    

    return;

}


function isGameEnd() {

    if (userScore == 5) 
    {
        winner.innerHTML = "You win ! Ai has been defeated";
        div.style.display='none';
        restart.style.display='flex';
        winner.style.display='flex';

    }
    else if (cpuScore == 5) 
    {
        winner.innerHTML = "You Lost ! Humanity has been defeated";
        div.style.display='none';
        restart.style.display='flex';
        winner.style.display='flex';

    }
}

