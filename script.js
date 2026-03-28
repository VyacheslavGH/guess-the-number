`use strict`;

// Создаем общую функцию для запуска игры "Отгадай число"
const guessTheNumber = function () {
    // ------------
    // Создаем замыкание для получения рандомного числа, которое потом будем отгадывать

    let getGuessNumber = function () {
        let randomNumber = 0;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        return function () {
            return randomNumber;
        };
    };

    // Функция проверки на строковое значение
    const isString = function (str) {
        for (let i = 0; i < 10; i++) {
            if (str.includes(String(i)) || str.trim().length === 0) {
                return false;
            }
        }
        return true;
    };

    const isNumber = function (num) {
        if (isNaN(num)) {
            return true;
        } else {
            return false;
        }
    };

    let randomGuessNumber = getGuessNumber();
    console.log(randomGuessNumber());

    // Создаем рекурсию и условия
    const userPlay = function () {
        let userInput = prompt("Угадай число от 1 до 100", 50);

        if (!userInput) {
            return alert("Игра окончена");
        }

        if (isNumber(userInput)) {
            alert("Введи число!");
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return alert("Игра окончена");
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
                return alert("Игра окончена");
            } else {
                userPlay();
            }
        }

        if (Number(userInput) < randomGuessNumber()) {
            alert("Загаданное число больше");
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return alert("Игра окончена");
            } else {
                userPlay();
            }
        }
    };
    return userPlay();
};

// Запуск глобальной функции для отладки
guessTheNumber();
