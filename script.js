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

    // Запускаем игру еще раз или прощаемся
    const playAgain = function (boolean) {
        if (boolean) {
            return guessTheNumber();
        } else {
            return alert("Приходите еще");
        }
    };

    // Спрашиваем у пользователя, хочет ли он сыграть еще, когда попытки кончились
    const attemptsAviable = function (attemptsCount) {
        if (attemptsCount > 0) {
            return attemptsCount;
        } else {
            return playAgain(confirm("Попытки закончились, хотите сыграть еще?"));
        }
    };

    let randomGuessNumber = getGuessNumber();
    console.log(`Число, которое мы загадали = ${randomGuessNumber()}`);

    // Создаем рекурсию и условия
    const userPlay = function () {
        let userInput = prompt("Угадай число от 1 до 100", 50);

        if (!userInput) {
            return alert("Игра окончена");
        }

        if (isNumber(userInput)) {
            alert(`Введи число! Осталось попыток ${attemptsAviable(minusAttempt())}`);
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return alert("Игра окончена");
            } else {
                userPlay();
            }
        }

        if (Number(userInput) === randomGuessNumber()) {
            alert("Поздравляю, Вы угадали!!!");
            return playAgain(confirm("Хотели бы сыграть еще?"));
        }

        if (Number(userInput) > randomGuessNumber()) {
            alert(`Загаданное число меньше, осталось попыток ${attemptsAviable(minusAttempt())}`);
            let answer = confirm("Введите новый вариант");
            if (!answer) {
                return alert("Игра окончена");
            } else {
                userPlay();
            }
        }

        if (Number(userInput) < randomGuessNumber()) {
            alert(`Загаданное число больше, осталось попыток ${attemptsAviable(minusAttempt())}`);
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
