const btnSelection = document.querySelectorAll('[data-selection]');

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
        makeSelection(selection);
    });
});

function makeSelection(selection){
    console.log(selection);

}

// computerPlay

function computerPlay(){
    
}