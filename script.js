`use strict`;

//
const guessTheNumber = function () {
    let guessNum = 0;

    let getGuessNumber = function () {
        let userInput = function () {
            return (guessNum = +prompt("Введите число для отгадывания", 50));
        };
        return userInput();
    };

    let numberWhatIGuess = getGuessNumber();
    console.log(numberWhatIGuess);

    let userInput = +prompt("Угадай число от 1 до 100", "Введите число");
};
