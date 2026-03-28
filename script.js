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

    const attemptsCounter = function () {
        let attempts = 10;
        return function () {
            return --attempts;
        };
    };

    let minusAttempt = attemptsCounter();

    const isNumber = function (num) {
        if (isNaN(num)) {
            return true;
        } else {
            return false;
        }
    };

    const gameOver = function () {
        return alert("Игра окончена");
    };

    // Запускаем игру еще раз или прощаемся
    const playAgain = function (boolean) {
        if (boolean) {
            return guessTheNumber();
        } else {
            return alert("Приходите еще");
        }
    };

    let randomGuessNumber = getGuessNumber();
    console.log(`Число, которое мы загадали = ${randomGuessNumber()}`);

    // Создаем рекурсию и условия
    const userPlay = function () {
        let userInput = prompt("Угадай число от 1 до 100", 50);

        if (!userInput) {
            return gameOver();
        }

        // Уменьшаем количество попыток и проверяем, если их меньше 1, то прекращаем игру
        let countAtt = minusAttempt();
        if (countAtt < 1) {
            return playAgain(confirm("Попытки закончились, хотите сыграть еще?"));
        }

        if (isNumber(userInput)) {
            alert(`Введи число! Осталось попыток ${countAtt}`);
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return gameOver();
            } else {
                userPlay();
            }
        }

        if (Number(userInput) === randomGuessNumber()) {
            alert("Поздравляю, Вы угадали!!!");
            return playAgain(confirm("Хотели бы сыграть еще?"));
        }

        if (Number(userInput) > randomGuessNumber()) {
            alert(`Загаданное число меньше, осталось попыток ${countAtt}`);
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return gameOver();
            } else {
                userPlay();
            }
        }

        if (Number(userInput) < randomGuessNumber()) {
            alert(`Загаданное число больше, осталось попыток ${countAtt}`);
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
