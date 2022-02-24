const btnSelection = document.querySelectorAll('[data-selection]');
const 

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
    const computerSelection = randomSelection
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    console.log(selection);
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

}

addSelectionResult(){

}

function isWinner(selection, opponetSelection){
    return selection.beats === opponentSelection.name

}


// computerPlay

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * gamePlay.length)
    return gamePlay[randomIndex];
}