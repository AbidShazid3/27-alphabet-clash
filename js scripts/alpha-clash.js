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
        console.log('you get a point');
        const currentScore = getTextElementValueById('current-score');
        const newCurrentScore = currentScore + 1;
        setTextElementValueById('current-score', newCurrentScore);

        // update score:
        // 1 get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // 2 increase the score by 1
        // const newCurrentScore = currentScore + 1;
        // // // 3 show the updated score
        // currentScoreElement.innerText = newCurrentScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed');
        const currentLife = getTextElementValueById('current-life');
        const newCurrentLife = currentLife - 1;
        setTextElementValueById('current-life', newCurrentLife);
        // 1 get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeElementText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeElementText);
        // // 2 reduce the life count
        // const newCurrentLife = currentLife - 1;
        // // display the update life count
        // currentLifeElement.innerText = newCurrentLife;
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