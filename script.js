`use strict`;

// Создаем общую функцию для запуска игры "Отгадай число"
const guessTheNumber = function () {
    // Создаем замыкание для получения рандомного числа, которое потом будем отгадывать

    let getGuessNumber = function () {
        let randomNumber = 0;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        return function () {
            return randomNumber;
        };
    };

    const isNumber = function (num) {
        if (isNaN(num)) {
            return false;
        } else {
            return true;
        }
    };

    const gameOver = function () {
        return alert("Игра окончена");
    };

    let randomGuessNumber = getGuessNumber();
    console.log(`Число, которое мы загадали = ${randomGuessNumber()}`);

    // Создаем рекурсию и условия
    const userPlay = function () {
        let userInput = prompt("Угадай число от 1 до 100", 50);

        if (!userInput) {
            return gameOver();
        }

        if (!isNumber(userInput)) {
            alert("Введи число!");
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return gameOver();
            } else {
                userPlay();
            }
        }

        if (Number(userInput) === randomGuessNumber()) {
            return alert("Поздравляю, Вы угадали!!!");
        }

        if (Number(userInput) > randomGuessNumber()) {
            alert("Загаданное число меньше");
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return gameOver();
            } else {
                userPlay();
            }
        }

        if (Number(userInput) < randomGuessNumber()) {
            alert("Загаданное число больше");
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return gameOver();
            } else {
                userPlay();
            }
        }
    };
    return userPlay();
};

// Запуск глобальной функции для отладки
guessTheNumber();
