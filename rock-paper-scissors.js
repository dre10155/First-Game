

let options = ["Rock","Paper","Scissors"]

function randomComputerOption(){
    return  Math.round(Math.random() * (2-0) +0)
}
function computerPlay (){
    let options = ["Rock","Paper","Scissors"]
    let copmuterSelection = randomComputerOption()
    return options[copmuterSelection]
}

function playGame(userSelection,computerSelection) {
    // checks for the winner 
    // Rock beats scissors
    // Paper beats rock
    // scissors beat paper 
    let results = ''

// Rock
    if(userSelection === "ROCK" && computerSelection === "ROCK")
    {
        results = "tie game "
    }else if(userSelection === "ROCK"  && computerSelection === "SCISSORS") {
        results = "Winner"
    }
    else if(userSelection === "ROCK"  && computerSelection === "PAPER"){
        results = "Loser"
    }


    //paper 
    if(userSelection === "PAPER" && computerSelection === "PAPER")
    {
        results = "tie game "
    }else if(userSelection === "PAPER"  && computerSelection === "ROCK") {
        results = "Winner"
    }
    else if(userSelection === "PAPER"  && computerSelection === "SCISSORS"){
        results = "Loser"
    }

    // Scissors
    if(userSelection === "SCISSORS" && computerSelection === "SCISSORS")
    {
        results = "tie game "

    }else if(userSelection === "SCISSORS"  && computerSelection === "PAPER") {
        results = "Winner"
    }
    else if(userSelection === "SCISSORS"  && computerSelection === "ROCK"){
        results = "Loser"
    }

    return results

}

function runGame(){
    
    let results=""
    for(let i = 0 ; i<5; i++){
        let userInput = prompt("Choose option").toUpperCase()
        let computerOption = computerPlay().toUpperCase()
        console.log('computer option:'+ computerOption)
        console.log('Play Option:'+ userInput)
        results = playGame(userInput,computerOption)
        console.log(results)
    }
    
    
}

console.log(runGame())

// let n = 7 
// let stars =""

// for(let x = 1; x <=n ; x++){
//     for(let j =0 ;j<x ; j++){
//        stars+="*"
//     }
//     stars += "\n"
// }
// console.log(stars)