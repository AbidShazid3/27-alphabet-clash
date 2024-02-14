// function playButton(){
//     // step 1 hide the home screen. to hide the screen add the classList hidden to the home section

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // console.log(homeScreen.classList);
//     // show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player press key:', playerPressed);

    // get the randomly key expected to press
    const cureentAlphabetElement = document.getElementById('cureent-alphabet');
    const cureentAlphabet = cureentAlphabetElement.innerText;
    const expectedAlphabet = cureentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check Alphabet matched or not
    if(playerPressed === expectedAlphabet){
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
        console.log('you get a point');
    }
    else{
        console.log('you missed')
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

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