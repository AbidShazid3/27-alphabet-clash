function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}

function getARandomAlphabet() {
    // step 1 get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // step 2 get a random index between 0 -25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    return alphabet;
}