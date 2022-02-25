const btnSelection = document.querySelectorAll('[data-selection]');
const finalColoumn = document.querySelector('[data-final-column]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const gamePlay = [
    {name:'rock', emoji:'🗿', beats: 'scissors'},
    {name:'paper', emoji:'📄', beats: 'rock'},
    {name:'scissors', emoji:'✂', beats: 'paper'}
]



// playerPlay
btnSelection.forEach(buttonSelection=>{
    buttonSelection.addEventListener('click', e=>{
        const btnSelect = buttonSelection.dataset.selection
        const selection = gamePlay.find(selection => selection.name === btnSelect)
        playerSelection(selection);
    });
});

function playerSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    console.log(selection);
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    if(yourWinner) scoreIncrement(yourScoreSpan)
    if(computerWinner) scoreIncrement(computerScoreSpan)

}
// scores

function scoreIncrement(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1

}

function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    
    finalColoumn.after(div)
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name

}


// computerPlay

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * gamePlay.length)
    return gamePlay[randomIndex];
}