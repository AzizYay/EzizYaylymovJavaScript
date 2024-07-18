let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function checkNumber() {
    // Запрашиваем ввод у пользователя
    let input = prompt("Пожалуйста, введите число:");
    
    // Преобразуем введенное значение в число
    let number = parseFloat(input);
    
    // Проверяем, является ли введенное значение числом
    if (isNaN(number)) {
        console.log("Введенное значение не является числом.");
    } else {
        // Проверяем, больше ли число 7
        if (number > 7) {
            console.log("Привет");
        }
    }
}

function checkName() {
    // Запрашиваем ввод у пользователя
    let input = prompt("Пожалуйста, введите имя:");
    
    // Проверяем, является ли введенное значение строкой
    if (typeof input === 'string') {
        // Проверяем, совпадает ли введенное имя с "Вячеслав"
        if (input === "Вячеслав") {
            console.log("Привет, Вячеслав");
        } else {
            console.log("Нет такого имени");
        }
    } else {
        console.log("Введенное значение не является строкой.");
    }
}

function printMultiplesOfThree(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0) {
            console.log(array[i]);
        }
    }
}

// Пример использования функции

checkNumber();
checkName();
printMultiplesOfThree(testArray);