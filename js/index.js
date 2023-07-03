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
    else if (userChoice=="scissor"&&cpuChoice=="Rrck")
    {
        return "YOU LOSE ! Rock beats Scissor";
    }


}

function game()
{
    let userScore=0;
    let cpuScore=0;

    for (let index = 0; index < 5; index++)
    {
        let user=prompt("Enter choice").toLowerCase();
        let cpu =getComputerChoice();
        let statement =playRound(user,cpu);
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
    }

    return [userScore,cpuScore];

}

let wins=game();
if(wins[0]>wins[1])
{
    console.log("YAY YOU WON!!");
}
else if(wins[0]<wins[1])
{
    console.log("AWWW YOU LOST !! ");
}
else
{
    console.log("NICE TRY ITS A DRAW");
}


