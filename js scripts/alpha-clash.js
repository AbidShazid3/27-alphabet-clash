// function playButton(){
//     // step 1 hide the home screen. to hide the screen add the classList hidden to the home section

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // console.log(homeScreen.classList);
//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function continueGame(){
    // step 1 generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
    // set randomly generated alphabet to the screen
    const cureentAlphabetElement = document.getElementById('cureent-alphabet');
    cureentAlphabetElement.innerText = alphabet

    // set background color
    setBackgroundColorById(alphabet);
}

function playButton(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}